using System;
using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.Services.Implementation
{
    public class ActivityService : IActivityService
    {

        private IActivityRepository ActivityRepository;

        private Activity activity;

        public ActivityService(IActivityRepository ActivityRepository)
        {
            this.ActivityRepository = ActivityRepository;
        }

        public IEnumerable<Activity> GetActivities()
        {
            var activities = ActivityRepository.GetAll();
            return activities;
        }
         public IEnumerable<Activity> GetActivitiesByCriteria( string teamMemberName,string clientName, string projectName,string categoryName, DateTime StartDate,DateTime EndDate)
        {
            var activities = ActivityRepository.GetActivitiesByCriteria( teamMemberName, clientName,  projectName, categoryName,  StartDate, EndDate);
            return activities;
        }

        public Activity GetActivity(int id)
        {
            var activities = ActivityRepository.GetActivityById(id);
            return activities;
        }
        public IEnumerable<Activity> GetActivitiesByDate(DateTime StartDate){
            var activities = ActivityRepository.GetActivitiesBySingleDate(StartDate);
            return activities;
        }

        public bool InsertActivity(Activity activity)
        {
            var response = ActivityRepository.InsertActivity(activity);
            return response;
        }
        public IEnumerable<Activity>  GetActivitiesBetweenDate(DateTime StartDate,DateTime EndDate){
             var response = ActivityRepository.GetActivitiesBetweenDate(StartDate,EndDate);
            return response;
        }

        public bool UpdateActivity(int id,Activity activity)
        {
           var response = ActivityRepository.UpdateActivity(id,activity);
            return response;
        }

        public bool DeleteActivity(int id)
        {
             var response = ActivityRepository.DeleteActivity(id);
            return response;
        }
    }
}