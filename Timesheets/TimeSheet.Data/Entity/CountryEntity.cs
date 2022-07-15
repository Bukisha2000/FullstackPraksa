using TimeSheet.Core.Domain;
namespace TimeSheet.Data.Entity
{
    public class CountryEntity : BaseEntity
    {
        public string CountryName {get; set;}
        public ICollection<ClientEntity> Clients {get; set;}
        
    }
}