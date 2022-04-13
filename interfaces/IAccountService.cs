namespace PMS.interfaces
{
    public interface IAccountService
    {
        public Task<bool> UserExist(string username);
    }
}