using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TimeSheet.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace TimeSheet.Data.Mappers
{
    public class ProjectMap
    {
        public ProjectMap(EntityTypeBuilder<ProjectEntity> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(t => t.Id);
            entityTypeBuilder.Property(t => t.ProjectName);
             entityTypeBuilder.Property(t => t.Description);
              entityTypeBuilder.Property(t => t.ProjectLead);
               entityTypeBuilder.Property(t => t.ClientName);
               entityTypeBuilder.Property(t => t.Status);

        //       entityTypeBuilder
        // .HasMany(a => a.Activities)
        // .WithOne(a => a.Project)
        // .OnDelete(DeleteBehavior.NoAction);
        }
    }
}