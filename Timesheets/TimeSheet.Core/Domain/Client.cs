

namespace TimeSheet.Core.Domain
{
    public class Client : BaseDomainClass
    {
        public string Name {get; set;}
        public string Address {get; set;}
        public string City {get; set;}
        public int PostalCode {get; set;}
        public string CountryID{get; set;}
    
        // public Country Country {get; set;}
    }
    
}