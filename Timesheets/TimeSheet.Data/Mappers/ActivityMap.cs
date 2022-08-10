using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using TimeSheet.Data.Entity;

namespace TimeSheet.Data.Mappers
{
    public class ActivityMap
    {
        public ActivityMap(EntityTypeBuilder<ActivityEntity> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(t => t.Id);
            entityTypeBuilder.Property(t => t.Description);
             entityTypeBuilder.Property(t => t.Time);
              entityTypeBuilder.Property(t => t.Overtime);
               entityTypeBuilder.Property(t => t.CategoryName);
               entityTypeBuilder.Property(t => t.ProjectName);
                entityTypeBuilder.Property(t => t.TeamMemberName);
                 entityTypeBuilder.Property(t => t.ClientName);
                 
                 
               
        // entityTypeBuilder
        // .HasOne(a => a.Project)
        // .WithMany(a => a.Activities)
        // .OnDelete(DeleteBehavior.NoAction );
        }
    }
}