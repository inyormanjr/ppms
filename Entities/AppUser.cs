namespace PMS.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;
        public Roles Role { get; set; } = Roles.Admin;
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordSalt { get; set; }
        public string GivenName { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;


    }
}