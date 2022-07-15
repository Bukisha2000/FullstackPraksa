using Microsoft.EntityFrameworkCore;
using TimeSheet.Data.Entity;
using TimeSheet.Data.Mappers;

namespace TimeSheet.Data.Database
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new CategoryMap(modelBuilder.Entity<CategoryEntity>());
            new ClientMap(modelBuilder.Entity<ClientEntity>());
            new CountryMap(modelBuilder.Entity<CountryEntity>());
            new ProjectMap(modelBuilder.Entity<ProjectEntity>());
            new TeamMemberMap(modelBuilder.Entity<TeamMemberEntity>());
             new ActivityMap(modelBuilder.Entity<ActivityEntity>());
            
            
        }
    }
}