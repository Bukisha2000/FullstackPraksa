using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.Services.Implementation
{
    public class TeamMemberService : ITeamMemberService
    {

        private ITeamMemberRepository teamMemberRepository;

        private TeamMember teamMember;

        public TeamMemberService(ITeamMemberRepository teamMemberRepository)
        {
            this.teamMemberRepository = teamMemberRepository;
        }

        public IEnumerable<TeamMember> GetTeamMember()
        {
            var teamMembers = teamMemberRepository.GetAll();
            return teamMembers;
        }

        public TeamMember GetTeamMember(int id)
        {
            var teamMembers = teamMemberRepository.GetTeamMemberById(id);
            return teamMembers;
        }

        public bool InsertTeamMember(TeamMember teamMember)
        {
           var teamMembers = teamMemberRepository.InsertTeamMember(teamMember);
            return teamMembers;
        }
        public bool UpdateTeamMember(int id,TeamMember teamMember)
        {
             var teamMembers = teamMemberRepository.UpdateTeamMember(id,teamMember);
            return teamMembers;
        }

        public bool DeleteTeamMember(int id)
        {
             var teamMembers = teamMemberRepository.DeleteTeamMember(id);
            return teamMembers;
        }
    }
}