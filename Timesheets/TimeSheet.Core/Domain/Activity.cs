
using System;

namespace TimeSheet.Core.Domain
{
    public class Activity : BaseDomainClass
    {

        public string Description {get; set;}
        public double Time {get; set;}
        public double Overtime {get; set;}
        public string CategoryName {get; set;}
        public string ProjectName {get; set;}

        public string ClientName {get; set;}
        public string  TeamMemberName{get; set;}
        public DateTime StartDate{get; set;}
        public DateTime EndDate{get; set;}

       
    }
}