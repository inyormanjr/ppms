using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PMS.Entities.ActivityEntities;

namespace PMS.FluentApiMapping
{
    public class ActivityMap : IEntityTypeConfiguration<Activity>
    {
        public void Configure(EntityTypeBuilder<Activity> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Type).WithMany().HasForeignKey(x => x.ActivityTypeId);
            builder.HasOne(x => x.CreatedBy).WithMany().HasForeignKey(x => x.CreatedById);
            builder.HasMany(x => x.Assignees).WithOne(x => x.Activity).HasForeignKey(x => x.ActivityId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}