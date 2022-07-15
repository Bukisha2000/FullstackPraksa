using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeSheet.Core.Domain;

namespace TimeSheet.Core.RepositoryInterfaces
{
    public interface IProjectRepository
    {
        IEnumerable<Project> GetAll();
        Project GetProjectById(int id);
        bool InsertProject(Project project);
        bool UpdateProject(int id,Project project);
        bool DeleteProject(int id);
        void SaveChanges();
        IEnumerable<Project> GetAllByName(string ProjectN);
    }
}