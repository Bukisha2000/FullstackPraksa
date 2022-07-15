using Microsoft.AspNetCore.Mvc;
using TimeSheet.Core.Domain;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.WebApi.Controllers
{
    [Route("api/TeamMember")]
    [ApiController]
    public class TeamMemberController : Controller
    {
        private readonly ILogger<TeamMemberController> _logger;
        private ITeamMemberService teamMemberService;

        public TeamMemberController(ILogger<TeamMemberController> logger, ITeamMemberService teamMemberService)
        {
            _logger = logger;
            ArgumentNullException.ThrowIfNull(teamMemberService, nameof(teamMemberService));
            this.teamMemberService = teamMemberService;
        }

        [HttpGet("all")]
        public IActionResult GetTeamMember()
        {
            var teamMembers = teamMemberService.GetTeamMember();
            return Ok(teamMembers);
        }
         [HttpGet("{id}")]
        public IActionResult GetTeamMemberById(int id)
        {
            var teamMembers = teamMemberService.GetTeamMember(id);
            return Ok(teamMembers);
        }
        [HttpPost]
         public IActionResult InsertTeamMembers([FromBody] TeamMember teamMember) 
        {
          

            var response = teamMemberService.InsertTeamMember(teamMember);
            if(response) 
            return Ok(response);

            return Ok("Not Added");
                
            
        }
         [HttpDelete("{id}")]
        public IActionResult DeleteTeamMemberID(int id)
        {
            var MemberOne = teamMemberService.DeleteTeamMember(id);
        
             return Ok(MemberOne);
        }
         [HttpPut("{id}")]
        public IActionResult UpdateTeamMember(int id,TeamMember teamMember)
        {
            var response = teamMemberService.UpdateTeamMember(id,teamMember);
            return Ok(response);
                
            
        }
    }
}