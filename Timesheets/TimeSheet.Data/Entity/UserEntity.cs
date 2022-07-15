namespace TimeSheet.Data.Entity
{
    public class UserEntity : BaseEntity
    {
        public string Name {get; set;}
        public string Username {get; set;}
        public string Email {get; set;}
        public string Password {get; set;}
        public bool IsActive {get; set;}
        public string Role {get; set;}
    }
}