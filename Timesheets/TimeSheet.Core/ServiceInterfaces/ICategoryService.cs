using TimeSheet.Core.Domain;

namespace TimeSheet.Core.ServiceInterfaces
{
    public interface ICategoryService
    {
        IEnumerable<Category> GetCategories();
        Category GetCategory(int id);
        bool InsertCategory(Category category);
        bool UpdateCategory(int id,Category category);
        bool DeleteCategory(int id);
      bool DeleteCategoryByName(string name);
    }
}