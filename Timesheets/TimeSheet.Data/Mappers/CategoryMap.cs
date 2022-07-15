using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TimeSheet.Data.Entity;
using Microsoft.EntityFrameworkCore;
namespace TimeSheet.Data.Mappers
{
    public class CategoryMap
    {
        public CategoryMap(EntityTypeBuilder<CategoryEntity> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(t => t.Id);
            entityTypeBuilder.Property(t => t.Name);
        //      entityTypeBuilder
        // .HasMany(a => a.Activities)
        // .WithOne(a => a.Category)
        // .OnDelete(DeleteBehavior.NoAction);
        }
    }
}