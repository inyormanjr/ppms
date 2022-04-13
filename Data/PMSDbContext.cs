using Microsoft.EntityFrameworkCore;
using PMS.Entities;
using PMS.FluentApiMapping;

namespace PMS.Data
{
    public class PMSDbContext : DbContext
    {
        public PMSDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new EskeyReceivableMap());
            
        }


        public DbSet<AppUser>? Users { get; set; }

    }
}