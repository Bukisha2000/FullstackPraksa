using TimeSheet.Core.Domain;

namespace TimeSheet.Core.RepositoryInterfaces
{
    public interface IActivityRepository
    {
        IEnumerable<Activity> GetAll();
        Activity? GetActivityById(int id);
        bool InsertActivity(Activity activity);
        bool UpdateActivity(int id,Activity activity);
        bool DeleteActivity(int id);
        void SaveChanges();
        IEnumerable<Activity> GetActivitiesBySingleDate(DateTime StartDate);
        IEnumerable<Activity> GetActivitiesBetweenDate(DateTime StartDate,DateTime EndDate);
        IEnumerable<Activity> GetActivitiesByCriteria( string teamMemberName,string clientName, string projectName,string categoryName, DateTime startDate,DateTime EndDate);

    }
}