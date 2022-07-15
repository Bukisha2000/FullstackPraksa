using Microsoft.EntityFrameworkCore;
using TimeSheet.Data.Database;
using TimeSheet.Data.Entity;
using AutoMapper;
using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using System.Runtime.InteropServices;
using System;

namespace TimeSheet.Data.Repository
{
    public class ActivityRepository : IActivityRepository
    {

        private readonly ApplicationContext applicationContext;
        private readonly IMapper _mapper;
        private DbSet<ActivityEntity> activities;

        public ActivityRepository(ApplicationContext applicationContext, IMapper mapper)
        {
            this.applicationContext = applicationContext;
            _mapper = mapper;
            activities = applicationContext.Set<ActivityEntity>();
        }

        public IEnumerable<Activity> GetAll()
        {
            var activityEntities = activities.AsEnumerable().ToList(); 
            return activityEntities.Select(_mapper.Map<Activity>);
        }

        public Activity? GetActivityById(int id)
        {
             var SingleActivity = activities.SingleOrDefault(x => x.Id == id);
             var MappedActivity = _mapper.Map<Activity>(SingleActivity);
             return MappedActivity;
        }

        public bool InsertActivity(Activity activity)
        {
            if(activity == null)
            {
                throw new ArgumentNullException("entity");
            }
            ActivityEntity mappedActivity = _mapper.Map<ActivityEntity>(activity);
            activities.Add(mappedActivity);
            SaveChanges();
           return true;
        }
        public IEnumerable<Activity> GetActivitiesBySingleDate(DateTime StartDate)
        {
               
             var ActivitiesByDate = activities.Where(x => x.StartDate.Date == StartDate.Date);

             
              return ActivitiesByDate.Select(_mapper.Map<Activity>);
        }
         public IEnumerable<Activity> GetActivitiesByCriteria( string teamMemberName,string clientName, string projectName,string categoryName, DateTime startDate,DateTime EndDate)
        {
           
            var activity = activities.Where(activity => activity.ClientName== clientName || clientName == default  ).Where(activity => activity.TeamMemberName == teamMemberName || 
            teamMemberName == default ).Where(activity => activity.ProjectName== projectName || projectName == default )
            .Where(activity => activity.CategoryName== categoryName|| categoryName == default ).Where(activity => activity.StartDate.Date.Equals(startDate.Date) || startDate == default )
            .Where(activity => activity.EndDate.Date.Equals(EndDate.Date) || EndDate == default );

          
            
            return activity.Select(_mapper.Map<Activity>);
        }
        public IEnumerable<Activity> GetActivitiesBetweenDate(DateTime StartDate,DateTime EndDate){
            var FewActivities = activities.Where(activity => activity.StartDate >= StartDate && activity.StartDate <= EndDate);

         
             return FewActivities.Select(_mapper.Map<Activity>);

        }

        public bool UpdateActivity(int id,Activity activity)
        {
           var OneActivity = activities.SingleOrDefault(x => x.Id == id);
             
          ActivityEntity mappedActivity = _mapper.Map<ActivityEntity>(OneActivity);
          mappedActivity.Description = activity.Description;
          mappedActivity.Time = activity.Time;
          mappedActivity.Overtime = activity.Overtime;
          mappedActivity.CategoryName = activity.CategoryName;
          mappedActivity.ProjectName = activity.ProjectName;
            activities.Update(mappedActivity);
            SaveChanges();
            return true;
        }

        public bool DeleteActivity(int id)
        {
            var ActivityOne = activities.FirstOrDefault(a => a.Id == id);
            // Client mappedClient = _mapper.Map<Client>(clientOne);
           activities.Remove(ActivityOne);
          SaveChanges();
          return true;
        }

        public void SaveChanges()
        {
              applicationContext.SaveChanges();
        }
    }
}