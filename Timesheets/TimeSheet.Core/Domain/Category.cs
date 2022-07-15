
namespace TimeSheet.Core.Domain
{
    [Serializable]
    public class Category : BaseDomainClass
    {

        public string Name {get; set;}
        public DateTime AddedDate {get; set;}
        public DateTime ModifiedDate {get; set;}
        
    }
}