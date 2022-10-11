using healthcareapi.Entities;
using healthcareapi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace healthcareapi.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IRepository repository;

        public CategoryController(IRepository repository)
        {
            this.repository = repository;
        }
        
        [HttpGet]
        [HttpGet("list")]
        [HttpGet("/allcategory")]
        public async Task<ActionResult<List<Category>>> Get()
        {
            return await repository.GetAllCategory();
        }

        [HttpGet("{Id:int}")]
        public ActionResult<Category> Get(int Id, [FromServices] string param2)
        {
            
            

            var category = repository.GetCategoryById(Id);
            if(category == null)
            {
                //return NotFound();
            }
            return category;

        }

        [HttpPost]
        public ActionResult Post([FromBody] Category category)
        {

            return NoContent();

        }

        [HttpPut]
        public ActionResult Put([FromBody] Category category)
        {
            

            return NoContent();

        }

        [HttpDelete]
        public ActionResult Delete()
        {
           
            return NoContent();

        }
    }
}
