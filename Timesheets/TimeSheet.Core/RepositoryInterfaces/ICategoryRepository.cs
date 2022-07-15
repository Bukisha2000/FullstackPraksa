using TimeSheet.Core.Domain;

namespace TimeSheet.Core.RepositoryInterfaces
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetAll();
        Category? GetCategoryById(int id);
        bool InsertCategory(Category category);
        bool UpdateCategory(int id,Category category);
        bool DeleteCategory(int id);
        void SaveChanges();
        bool DeleteCategoryByName(string name);
    }
}