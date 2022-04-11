using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.Entities;

namespace PMS.Controllers
{
    public class UserController : ApiBaseController
    {
        private readonly PMSDbContext _context;
        public UserController(PMSDbContext context)
        {
            this._context = context;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers() {
            return await _context.Users.ToListAsync();
            
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUserById(int id) {
            return await _context.Users.FindAsync(id);
        }
    }
}