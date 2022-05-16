using System.Security.Claims;

namespace PMS.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static int GetUserId(this ClaimsPrincipal user) {
            return int.Parse(user.FindFirst(ClaimTypes.Sid)?.Value);
        }
    }
}