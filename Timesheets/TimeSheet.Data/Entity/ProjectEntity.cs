namespace TimeSheet.Data.Entity
{
    public class ProjectEntity : BaseEntity
    {
        public string ProjectName {get; set;}
        public string Description {get; set;}
        public string ProjectLead {get; set;}

         public string ClientName {get; set;}
         public bool Status {get; set;}

        // public ICollection<TeamMemberEntity> TeamMembers {get; set;}
        // public ICollection<ActivityEntity> Activities {get; set;}
       
    }
}