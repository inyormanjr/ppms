using PMS.Entities;

namespace PMS.DTO
{
    public class UserProfileDTO
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;
        public Roles Role { get; set; } = Roles.Admin;
        public string Password { get; set; } = string.Empty;
        public string GivenName { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Contact { get; set; } = string.Empty;
        public string ImagePath { get; set; } = string.Empty;
    }
}