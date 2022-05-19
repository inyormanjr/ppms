using Microsoft.EntityFrameworkCore;
using PMS.Entities;
using PMS.Entities.EskeysEntities;
using PMS.FluentApiMapping;

namespace PMS.Data
{
    public class PMSDbContext : DbContext
    {
        public PMSDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<EskeyReceivable> EskeyReceivable { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new EskeyReceivableMap());
            
        }



    }
}