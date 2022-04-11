using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.DTO;
using PMS.Entities;

namespace PMS.Controllers
{
    public class AccountController : ApiBaseController
    {
        private readonly PMSDbContext __context;
        public AccountController(PMSDbContext _context)
        {
            this.__context = _context;

        }

        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDTO registerDTO) {

            if(await UserExist(registerDTO.Username)) return  new BadRequestResult() {};
            using var hmac = new HMACSHA512();

            var user = new AppUser()
            {
                UserName = registerDTO.Username,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                PasswordSalt = hmac.Key
        };
            __context.Users.Add(user);
            await __context.SaveChangesAsync();

            return user;
        }

        [HttpPost("login")]
        public async Task<ActionResult<AppUser>> Login(LoginDTO loginDTO) {
            var user = await __context.Users.SingleOrDefaultAsync(x => x.UserName == loginDTO.Username);
            if(user == null) return new UnauthorizedResult();
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));
            for (int i = 0; i < computeHash.Length; i++)
            {
                if(computeHash[i] == user.PasswordHash[i]) return new UnauthorizedResult();
            }
            return user;
        }

        private async Task<bool> UserExist(string username) {
            return await __context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

    }
}