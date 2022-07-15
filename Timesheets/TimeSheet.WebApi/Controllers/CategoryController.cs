using Microsoft.AspNetCore.Mvc;
using TimeSheet.Core.Domain;
using TimeSheet.Core.ServiceInterfaces;

namespace TimeSheet.WebApi.Controllers
{
    [Route("api/Category")]
    [ApiController]
    public class CategoryController : Controller
    {
        private readonly ILogger<CategoryController> _logger;
        private ICategoryService categoryService;

        public CategoryController(ILogger<CategoryController> logger, ICategoryService categoryService)
        {
            _logger = logger;
            ArgumentNullException.ThrowIfNull(categoryService, nameof(categoryService));
            this.categoryService = categoryService;
        }

        [HttpGet("all")]
        public IActionResult GetCategories()
        {
            var categories = categoryService.GetCategories();
            return Ok(categories);
        }
         [HttpGet("{id}")]
        public IActionResult GetCategoryById(int id)
        {
            var categories = categoryService.GetCategory(id);
            return Ok(categories);
        }
        [HttpPost]
         public IActionResult InsertCategory([FromBody] Category category) 
        {
          

            var response = categoryService.InsertCategory(category);
            if(response) 
            return Ok(response);

            return Ok("Not Added");
                
            
        }
        [HttpDelete("Name")]
        public IActionResult DeleteCategoryByName(string name){
             var CategoryOne = categoryService.DeleteCategoryByName(name);
        
             return Ok(CategoryOne);
        }
         [HttpDelete("{id}")]
        public IActionResult DeleteCategoryID(int id)
        {
            var CategoryOne = categoryService.DeleteCategory(id);
        
             return Ok(CategoryOne);
        }
         [HttpPut("{id}")]
        public IActionResult UpdateCategory(int id,Category category)
        {
            var response = categoryService.UpdateCategory(id,category);
            return Ok(response);
                
            
        }
    }
}