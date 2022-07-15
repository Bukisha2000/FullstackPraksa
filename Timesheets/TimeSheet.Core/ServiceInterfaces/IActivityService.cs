using TimeSheet.Core.Domain;

namespace TimeSheet.Core.ServiceInterfaces
{
    public interface IActivityService
    {
        IEnumerable<Activity> GetActivities();
        Activity GetActivity(int id);
        bool InsertActivity(Activity activity);
        bool UpdateActivity(int id,Activity activity);
        bool DeleteActivity(int id);
        IEnumerable<Activity> GetActivitiesByDate(DateTime StartDate);
         IEnumerable<Activity>  GetActivitiesBetweenDate(DateTime StartDate,DateTime EndDate);
        IEnumerable<Activity> GetActivitiesByCriteria( string teamMemberName,string clientName, string projectName,string categoryName, DateTime startDate,DateTime EndDate);
    }
}