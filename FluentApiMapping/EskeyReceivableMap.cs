using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PMS.Entities.EskeysEntities;

namespace PMS.FluentApiMapping
{
    public class EskeyReceivableMap : IEntityTypeConfiguration<EskeyReceivable>
    {
        public void Configure(EntityTypeBuilder<EskeyReceivable> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Operator).WithMany().HasForeignKey(y => y.OperatorId);
            builder.HasMany(x => x.EskeyReceivableDetails).WithOne(x => x.EskeyReceivable).HasForeignKey(x => x.EskeyReceivableId).OnDelete(DeleteBehavior.ClientCascade);
           
        }
    }
}