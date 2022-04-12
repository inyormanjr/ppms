using Microsoft.EntityFrameworkCore;
using PMS.Entities;

namespace PMS.Data
{
    public class PMSDbContext : DbContext
    {
       

        public DbSet<AppUser> Users { get; set; }

    }
}