using Microsoft.EntityFrameworkCore;
using TimeSheet.Data.Database;
using TimeSheet.Data.Entity;
using AutoMapper;
using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using System.Security.Permissions;

namespace TimeSheet.Data.Repository
{
    public class ProjectRepository : IProjectRepository
    {

        private readonly ApplicationContext applicationContext;
        private readonly IMapper _mapper;
        private DbSet<ProjectEntity> projects;

        public ProjectRepository(ApplicationContext applicationContext, IMapper mapper)
        {
            this.applicationContext = applicationContext;
            _mapper = mapper;
            projects = applicationContext.Set<ProjectEntity>();
        }

        public IEnumerable<Project> GetAll()
        {
            var projectEntities = projects.AsEnumerable().ToList(); 
            return projectEntities.Select(_mapper.Map<Project>);
        }

        public Project? GetProjectById(int id)
        {
            var OneProject =  projects.SingleOrDefault(x => x.Id == id);
             Project mappedProject = _mapper.Map<Project>(OneProject);
           
          return mappedProject;
            
        }

        public bool InsertProject(Project project)
        {
            if(project == null)
            {
                throw new ArgumentNullException("entity");
                return false;
            }
            ProjectEntity mappedProject = _mapper.Map<ProjectEntity>(project);
            projects.Add(mappedProject);
            SaveChanges();
            return true;
        }

        public bool UpdateProject(int id,Project project)
        {
          var OneProject = projects.SingleOrDefault(x => x.Id == id);
             
          ProjectEntity mappedProject = _mapper.Map<ProjectEntity>(OneProject);
          if(!project.ProjectName.Equals("")){
             mappedProject.ProjectName = project.ProjectName;
          }
           if(!project.Description.Equals("")){
             mappedProject.Description = project.Description;
          }
           if(!project.ProjectLead.Equals("")){
             mappedProject.ProjectLead = project.ProjectLead;
          }
           if(!project.ClientName.Equals("")){
             mappedProject.ClientName = project.ClientName;
          }
          mappedProject.Status = project.Status;
        
         
          
            projects.Update(mappedProject);
           SaveChanges();
            return true;
        }
         public IEnumerable<Project> GetAllByName(string ProjectN)
        {
            var projectEntities = projects.Where(projects => projects.ProjectName.StartsWith(ProjectN)).AsEnumerable().ToList();
            return projectEntities.Select(_mapper.Map<Project>);
        }

        public bool DeleteProject(int id)
        {
            var ProjectOne = projects.FirstOrDefault(a => a.Id == id);
            
           projects.Remove(ProjectOne);
          SaveChanges();
          return true;
        }

        public void SaveChanges()
        {
              applicationContext.SaveChanges();
        }
    }
}