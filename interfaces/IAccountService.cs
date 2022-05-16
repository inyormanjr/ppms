using PMS.Entities;

namespace PMS.interfaces
{
    public interface IAccountService
    {
        public Task<bool> UserExist(string username);
        public Task<AppUser> GetUserByUsername(string username);
    }
}