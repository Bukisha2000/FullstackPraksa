using TimeSheet.Core.Domain;

namespace TimeSheet.Core.ServiceInterfaces
{
    public interface IProjectService
    {
        IEnumerable<Project> GetProjects();
        Project GetProject(int id);
        bool InsertProject(Project project);
        bool UpdateProject(int id,Project project);
        bool DeleteProject(int id);
        IEnumerable<Project> GetProjectsByName(string ProjectN);
    }
}