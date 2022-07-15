namespace TimeSheet.Core.Domain
{
    public class Project : BaseDomainClass
    {
        public string ProjectName {get; set;}
        public string Description {get; set;}
        public string ProjectLead {get; set;}
        public string ClientName {get; set;}
        public bool Status {get; set;}
        
        
    }
}