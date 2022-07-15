using System;
using Microsoft.AspNetCore.Mvc;
using TimeSheet.Core.Domain;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.WebApi.Controllers
{
    [Route("api/Activity")]
    [ApiController]
    public class ActivityController : Controller
    {
        private readonly ILogger<ActivityController> _logger;
        private IActivityService activityService;

        public ActivityController(ILogger<ActivityController> logger, IActivityService activityService)
        {
            _logger = logger;
            ArgumentNullException.ThrowIfNull(activityService, nameof(activityService));
            this.activityService = activityService;
        }

        [HttpGet("all")]
        public IActionResult GetActivities()
        {
            var activities = activityService.GetActivities();
            return Ok(activities);
        }
         [HttpGet("{id}")]
        public IActionResult GetActivityById(int id)
        {
            var activities = activityService.GetActivity(id);
            return Ok(activities);
        }
        [HttpPost]
         public IActionResult InsertActivity([FromBody] Activity activity) 
        {
          

            var response = activityService.InsertActivity(activity);
            if(response) 
            return Ok(response);

            return Ok("Not Added");
                
            
        }
         [HttpDelete("{id}")]
        public IActionResult DeleteActivityID(int id)
        {
            var ActivityID = activityService.DeleteActivity(id);
        
             return Ok(ActivityID);
        }
         [HttpPut("{id}")]
        public IActionResult UpdateActivity(int id,Activity activity)
        {
            var response = activityService.UpdateActivity(id,activity);
            return Ok(response);
                
            
        }
        [HttpGet]
        public IActionResult GetActivityCriteria( string? teamMemberName,string? clientName, string? projectName,string? categoryName, DateTime StartDate,DateTime EndDate)
        {
            var activities = activityService.GetActivitiesByCriteria( teamMemberName, clientName,  projectName, categoryName,  StartDate, EndDate);
            return Ok(activities);
        }
        // [HttpGet("PDF")]

        [HttpGet("date")]
        public IActionResult GetActivitiesByDate(DateTime StartDate){
             var activities = activityService.GetActivitiesByDate(StartDate);
            return Ok(activities);
        }
        [HttpGet("between")]

        public IActionResult GetActivitiesBetweenDate(DateTime StartDate,DateTime EndDate){
              var activities = activityService.GetActivitiesBetweenDate(StartDate,EndDate);
            return Ok(activities);
        }
    }
}