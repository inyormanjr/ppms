using PMS.Entities;

namespace PMS.interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
        string currenUserId(string _token);
    }
}