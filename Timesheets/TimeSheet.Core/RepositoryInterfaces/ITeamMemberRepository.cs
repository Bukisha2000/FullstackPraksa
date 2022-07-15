using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSheet.Core.Domain;

namespace TimeSheet.Core.RepositoryInterfaces
{
    public interface ITeamMemberRepository
    {
        IEnumerable<TeamMember> GetAll();
        TeamMember GetTeamMemberById(int id);
        bool InsertTeamMember(TeamMember teamMember);
        bool UpdateTeamMember(int id,TeamMember teamMember);
        bool DeleteTeamMember(int id);
        void SaveChanges();
    }
}