using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PMS.Entities.ActivityEntities;

namespace PMS.FluentApiMapping
{
    public class AssigneeMap : IEntityTypeConfiguration<ActivityAssignee>
    {
        public void Configure(EntityTypeBuilder<ActivityAssignee> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Assignee).WithMany().HasForeignKey(x => x.AssigneeId);
        }
    }
}