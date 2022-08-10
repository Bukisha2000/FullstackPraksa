using System.Runtime.Serialization;

namespace TimeSheet.Core.Domain
{
    public class TeamMember : BaseDomainClass
    {
        public string Username {get; set;}
        public string Email {get; set;}
        public string TeamMemberName {get; set;}
        public bool Status {get; set;}
        public int HoursPerWeek {get; set;}
         public string Role {get; set;}
    }
}