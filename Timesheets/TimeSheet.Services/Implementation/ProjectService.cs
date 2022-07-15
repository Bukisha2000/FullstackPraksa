using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.Services.Implementation
{
    public class ProjectService : IProjectService
    {

        private IProjectRepository projectRepository;

        private Project project;

        public ProjectService(IProjectRepository projectRepository)
        {
            this.projectRepository = projectRepository;
        }

        public IEnumerable<Project> GetProjects()
        {
            var projects = projectRepository.GetAll();
            return projects;
        }

        public Project GetProject(int id)
        {
          var projects = projectRepository.GetProjectById(id);
            return projects;   
        }

        public bool InsertProject(Project project)
        {
             var projects = projectRepository.InsertProject(project);
            return projects;  
        }

        public bool UpdateProject(int id,Project project)
        {
             var projects = projectRepository.UpdateProject(id,project);
            return projects;  
        }
          public IEnumerable<Project> GetProjectsByName(string ProjectN)
        {
            var projects = projectRepository.GetAllByName(ProjectN);
            return projects;
        }

        public bool DeleteProject(int id)
        {
            var projects = projectRepository.DeleteProject(id);
            return projects;  
        }
    }
}