using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TimeSheet.Data.Entity;

namespace TimeSheet.Data.Mappers
{
    public class TeamMemberMap
    {
        public TeamMemberMap(EntityTypeBuilder<TeamMemberEntity> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(t => t.Id);
            entityTypeBuilder.Property(t => t.Username);
            entityTypeBuilder.Property(t => t.Email);
            entityTypeBuilder.Property(t => t.TeamMemberName);
            entityTypeBuilder.Property(t => t.Status);
             entityTypeBuilder.Property(t => t.HoursPerWeek);
        }
    }
}