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
            builder.HasOne(x => x.Collector).WithMany().HasForeignKey(y => y.CollectorId);
        }
    }
}