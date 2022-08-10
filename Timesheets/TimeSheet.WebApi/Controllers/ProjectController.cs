using Microsoft.AspNetCore.Mvc;
using TimeSheet.Core.Domain;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.WebApi.Controllers
{
    [Route("api/Project")]
    [ApiController]
    public class ProjectController : Controller
    {
        private readonly ILogger<ProjectController> _logger;
        private IProjectService projectService;

        public ProjectController(ILogger<ProjectController> logger, IProjectService projectService)
        {
            _logger = logger;
            ArgumentNullException.ThrowIfNull(projectService, nameof(projectService));
            this.projectService = projectService;
        }

        [HttpGet("all")]
        public IActionResult GetProjects()
        {
            var projects = projectService.GetProjects();
            return Ok(projects);
        }
         [HttpGet("{id}")]
        public IActionResult GetProjectById(int id)
        {
            var projects = projectService.GetProject(id);
            return Ok(projects);
        }
        [HttpPost]
         public IActionResult InsertProjects([FromBody] Project project) 
        {
          

            var response = projectService.InsertProject(project);
            if(response) 
            return Ok(response);

            return Ok("Not Added");
                
            
        }
         [HttpGet("name")]
        public IActionResult GetProjectsName(string ProjectN)
        {
            var projects = projectService.GetProjectsByName(ProjectN);
            return Ok(projects);
        }
         [HttpDelete("{id}")]
        public IActionResult DeleteProjectID(int id)
        {
            var ProjectOne = projectService.DeleteProject(id);
        
             return Ok(ProjectOne);
        }
         [HttpPut("{id}")]
        public IActionResult UpdateProject(int id,Project project)
        {
            var response = projectService.UpdateProject(id,project);
            return Ok(response);
                
            
        }
    }
}