using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.Services.Implementation
{
    public class CategoryService : ICategoryService
    {

        private ICategoryRepository categoryRepository;

        private Category category;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        public IEnumerable<Category> GetCategories()
        {
            var categories = categoryRepository.GetAll();
            return categories;
        }
        public bool DeleteCategoryByName(string name){
            var categories = categoryRepository.DeleteCategoryByName(name);
            return categories;
        }

        public Category GetCategory(int id)
        {
            var categories = categoryRepository.GetCategoryById(id);
            return categories;
        }

        public bool InsertCategory(Category category)
        {
           var categories = categoryRepository.InsertCategory(category);
            return categories;
        }

        public bool UpdateCategory(int id,Category category)
        {
           var categories = categoryRepository.UpdateCategory(id,category);
            return categories;
        }

        public bool DeleteCategory(int id)
        {
            var categories = categoryRepository.DeleteCategory(id);
            return categories;
        }
    }
}