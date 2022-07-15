using Microsoft.EntityFrameworkCore;
using TimeSheet.Data.Database;
using TimeSheet.Data.Entity;
using AutoMapper;
using TimeSheet.Core.Domain;
using TimeSheet.Core.RepositoryInterfaces;

namespace TimeSheet.Data.Repository
{
    public class CategoryRepository : ICategoryRepository
    {

        private readonly ApplicationContext applicationContext;
        private readonly IMapper _mapper;
        private DbSet<CategoryEntity> categories;

        public CategoryRepository(ApplicationContext applicationContext, IMapper mapper)
        {
            this.applicationContext = applicationContext;
            _mapper = mapper;
            categories = applicationContext.Set<CategoryEntity>();
        }

        public IEnumerable<Category> GetAll()
        {
            var categoryEntites = categories.AsEnumerable().ToList(); 
            return categoryEntites.Select(_mapper.Map<Category>);
        }

        public Category? GetCategoryById(int id)
        {
            var SingleCategory = categories.SingleOrDefault(x => x.Id == id);
            Category MappedCategory = _mapper.Map<Category>(SingleCategory);
            return MappedCategory;
        }


        public bool InsertCategory(Category category)
        {
            if(category == null)
            {
                throw new ArgumentNullException("entity");
                return false;
            }
            CategoryEntity mappedCategory = _mapper.Map<CategoryEntity>(category);
            categories.Add(mappedCategory);
            SaveChanges();
            return true;
            
        }

        public bool UpdateCategory(int id,Category category)
        {
             var OneCategory = categories.SingleOrDefault(x => x.Id == id);
             
          CategoryEntity mappedCategory = _mapper.Map<CategoryEntity>(OneCategory);
          mappedCategory.Name = category.Name;
            categories.Update(mappedCategory);
            SaveChanges();
            return true;
        }
        public bool DeleteCategoryByName(string name){
            var CategoryOne = categories.FirstOrDefault(a => a.Name == name);
            // Client mappedClient = _mapper.Map<Client>(clientOne);
             if(CategoryOne == null)
            {
                throw new ArgumentNullException("entity");
                return false;
            }
           categories.Remove(CategoryOne);
         SaveChanges();
          return true;
        }
        public bool DeleteCategory(int id)
        {
            var CategoryOne = categories.FirstOrDefault(a => a.Id == id);
            // Client mappedClient = _mapper.Map<Client>(clientOne);
             if(CategoryOne == null)
            {
                throw new ArgumentNullException("entity");
                return false;
            }
           categories.Remove(CategoryOne);
         SaveChanges();
          return true;
        }

        public void SaveChanges()
        {
             applicationContext.SaveChanges();
        }
    }
}