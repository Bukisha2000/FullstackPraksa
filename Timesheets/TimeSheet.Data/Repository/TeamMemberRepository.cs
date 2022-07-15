using Microsoft.EntityFrameworkCore;
using TimeSheet.Data.Database;
using TimeSheet.Data.Entity;
using AutoMapper;
using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;

namespace TimeSheet.Data.Repository
{
    public class TeamMemberRepository : ITeamMemberRepository
    {

        private readonly ApplicationContext applicationContext;
        private readonly IMapper _mapper;
        private DbSet<TeamMemberEntity> teamMembers;

        public TeamMemberRepository(ApplicationContext applicationContext, IMapper mapper)
        {
            this.applicationContext = applicationContext;
            _mapper = mapper;
            teamMembers = applicationContext.Set<TeamMemberEntity>();
        }

        public IEnumerable<TeamMember> GetAll()
        {
            var TeamMemberEntities = teamMembers.AsEnumerable().ToList(); 
            return TeamMemberEntities.Select(_mapper.Map<TeamMember>);
        }

        public TeamMember? GetTeamMemberById(int id)
        {
            var OneTeamMember = teamMembers.SingleOrDefault(x => x.Id == id);
             TeamMember MappedTeamMember = _mapper.Map<TeamMember>(OneTeamMember);
             return MappedTeamMember;
        
        }

        public bool InsertTeamMember(TeamMember teamMember)
        {
            if(teamMember == null)
            {
                throw new ArgumentNullException("entity");
                return false;
            }
             TeamMemberEntity MappedTeamMember = _mapper.Map<TeamMemberEntity>(teamMember);
            teamMembers.Add(MappedTeamMember);
            SaveChanges();
            return true;
          
        }

        public bool UpdateTeamMember(int id,TeamMember teamMember)
        {
             var OneTeamMember = teamMembers.SingleOrDefault(x => x.Id == id);
             
          TeamMemberEntity mappedTeamMember = _mapper.Map<TeamMemberEntity>(OneTeamMember);

          if(!teamMember.Username.Equals("")){
                 mappedTeamMember.Username = teamMember.Username;
          }
          if(!teamMember.Email.Equals("")){
                 mappedTeamMember.Email = teamMember.Email;
          }
          if(!teamMember.Role.Equals("")){
                 mappedTeamMember.Username = teamMember.Username;
          }
          if(!teamMember.TeamMemberName.Equals("")){
                 mappedTeamMember.TeamMemberName = teamMember.TeamMemberName;
          }
        
          if(!teamMember.HoursPerWeek.Equals(0)){
                 mappedTeamMember.HoursPerWeek = teamMember.HoursPerWeek;
          }
            mappedTeamMember.Status = teamMember.Status;
           
            teamMembers.Update(mappedTeamMember);
            SaveChanges();
            return true;
        }

        public bool DeleteTeamMember(int id)
        {
           var TeamMemberOne = teamMembers.FirstOrDefault(a => a.Id == id);
            // Client mappedClient = _mapper.Map<Client>(clientOne);
           teamMembers.Remove(TeamMemberOne);
          SaveChanges();
          return true;
        }

        public void SaveChanges()
        {
            applicationContext.SaveChanges();
        }
    }
}