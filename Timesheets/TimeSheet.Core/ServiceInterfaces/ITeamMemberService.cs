using TimeSheet.Core.Domain;

namespace TimeSheet.Core.ServiceInterfaces
{
    public interface ITeamMemberService
    {
        IEnumerable<TeamMember> GetTeamMember();
        TeamMember GetTeamMember(int id);
        bool InsertTeamMember(TeamMember teamMember);
        bool UpdateTeamMember(int id,TeamMember teamMember);
        bool DeleteTeamMember(int id);
    }
}