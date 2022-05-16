using Microsoft.EntityFrameworkCore;
using PMS.Data;
using PMS.Entities;
using PMS.interfaces;

namespace PMS.services
{
    public class AccountService:IAccountService
    {
        private readonly PMSDbContext _dbContext;
        public AccountService(PMSDbContext dbContext) {

            _dbContext = dbContext;
        }

        public async Task<bool> UserExist(string username)
        {
            return await _dbContext.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

        public async Task<AppUser> GetUserByUsername(string username) {
            return await _dbContext.Users.FirstOrDefaultAsync(x => x.UserName == username);
        }
    }
}