using TimeSheet.Core.Domain;
using TimeSheet.Data.Entity;
namespace TimeSheet.Data.Entity
{
    public class ClientEntity : BaseEntity
    {
        public string Name {get; set;}
        public string Address {get; set;}
        public string City {get; set;}
        public int PostalCode {get; set;}
        public string CountryID{get; set;}
        // public CountryEntity Country {get; set;}

        public ICollection<ProjectEntity> Projects {get; set;}
        //  public ICollection<ActivityEntity> Activities {get; set;}
    
    }
}