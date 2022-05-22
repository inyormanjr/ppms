using Microsoft.EntityFrameworkCore;
using PMS.Entities;
using PMS.Entities.ActivityEntities;
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
        public DbSet<ActivityType> ActivityType { get; set; }
        public DbSet<Activity> Activity { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new EskeyReceivableMap());
            modelBuilder.ApplyConfiguration(new ActivityMap());

        }



    }
}