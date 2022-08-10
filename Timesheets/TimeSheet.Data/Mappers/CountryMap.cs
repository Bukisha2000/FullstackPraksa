using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TimeSheet.Data.Entity;

namespace TimeSheet.Data.Mappers
{
    public class CountryMap
    {
        public CountryMap(EntityTypeBuilder<CountryEntity> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(t => t.Id);
            entityTypeBuilder.Property(t => t.CountryName);
        //     entityTypeBuilder
        // .HasMany(a => a.Clients)
        // .WithOne(a => a.CountryID);
        
           
        }
    }
}