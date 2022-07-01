using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.Base;
using PMS.Data;
using PMS.DTO;
using PMS.Entities;
using PMS.interfaces;

namespace PMS.Controllers
{
    public class AccountController : ApiBaseController
    {
        private readonly PMSDbContext __context;
        private readonly ITokenService tokenService;

        public AccountController(PMSDbContext _context, ITokenService  tokenService)
        {
            this.__context = _context;
            this.tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO) {

            if(await UserExist(registerDTO.Username)) return  new BadRequestResult();
            using var hmac = new HMACSHA512();

            var user = new AppUser()
            {
                UserName = registerDTO.Username,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                PasswordSalt = hmac.Key
        };
            __context.Users.Add(user);
            await __context.SaveChangesAsync();

            return new UserDTO {
                Username = user.UserName,
                Token = tokenService.CreateToken(user),
                Role = user.Role.ToString()
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO) {
            var user = await __context.Users.SingleOrDefaultAsync(x => x.UserName == loginDTO.Username);
            if(user == null) return new UnAuthorized("User not found.");
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));
            for (int i = 0; i < computeHash.Length; i++)
            {
                if(computeHash[i] != user.PasswordHash[i]) return new UnAuthorized("Incorrect password");
            }
             return new UserDTO
            {
                Username = user.UserName,
                Token = tokenService.CreateToken(user),
                Role = user.Role.ToString()
            }; ;
        }

        [HttpGet("CheckAuth")]
        [Authorize]
        public async Task<ActionResult<bool>> CheckAuthenticated() {
            return await Task.Run<bool>((() => true));
        }

        private async Task<bool> UserExist(string username) {
            return await __context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

    }
}