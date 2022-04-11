using Microsoft.EntityFrameworkCore;
using PMS.Entities;

namespace PMS.Data
{
    public class PMSDbContext : DbContext
    {
        public PMSDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
    }
}