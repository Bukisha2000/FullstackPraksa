namespace TimeSheet.Data.Entity
{
    public class TeamMemberEntity : BaseEntity
    {
         public string Username {get; set;}
        public string Email {get; set;}
        public string TeamMemberName {get; set;}
        public bool Status {get; set;}
        public int HoursPerWeek {get; set;}
        public string Role {get; set;}
    }
}