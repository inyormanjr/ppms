using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.DTO;
using PMS.Entities;

namespace PMS.Controllers
{
    public class UserController : ApiBaseController
    {
        private readonly PMSDbContext _context;
        private readonly IMapper _mapper;
        public UserController(PMSDbContext context, IMapper mapper)
        {
            this._mapper = mapper;
            this._context = context;

        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }


        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<AppUser>> GetUserById(int id)
        {
            var result = await _context.Users.FindAsync(id);
            if (result == null) return new BadRequestResult();
            return result;
        }

        [HttpPut]
        [Authorize]
        public async Task<ActionResult<UserProfileDTO>> UpdateProfile(UserProfileDTO userProfileDTO) {
            var currentID = this.User.Claims.FirstOrDefault().Value;
            var currentProfile = await _context.Users.FindAsync(currentID);
            if(currentProfile == null) return BadRequest("No User Found.");
            currentProfile.GivenName = userProfileDTO.GivenName;
            currentProfile.Surname = userProfileDTO.Surname;
            currentProfile.Contact = userProfileDTO.Contact;
            currentProfile.Address = userProfileDTO.Address;
             _context.Users.Update(currentProfile);
            await _context.SaveChangesAsync();
            var result = _mapper.Map<UserProfileDTO>(currentProfile);
            return result;
        }

        [HttpGet("profile")]
        [Authorize]
        public async Task<ActionResult<UserProfileDTO>> GetUserProfile()
        {
            var userId = this.User.Claims.FirstOrDefault().Value;
            var result = await _context.Users.FindAsync(int.Parse(userId));
            if (result == null) return new BadRequestResult();
            var mapped = this._mapper.Map<UserProfileDTO>(result);
            return mapped;
        }
    }
}