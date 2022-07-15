using System.ComponentModel.DataAnnotations.Schema;

namespace TimeSheet.Data.Entity
{
    [Serializable]
    public class BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id {get; set;}
        public DateTime AddedDate {get; set;}
        public DateTime ModifiedDate {get; set;}
    }
}