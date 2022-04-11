namespace PMS.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string GivenName { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;


    }
}