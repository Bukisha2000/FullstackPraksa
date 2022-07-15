namespace TimeSheet.Data.Entity
{
    public class CategoryEntity : BaseEntity
    {
        public string Name {get; set;}
  public ICollection<ActivityEntity> Activities {get; set;}
    }
}