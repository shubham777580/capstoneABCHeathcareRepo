using healthcareapi.Entities;
using healthcareapi.Filters;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace healthcareapi.Controllers
{
    [Route("api/category")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class CategoryController : ControllerBase
    {
        //private readonly IRepository repository;
        private readonly ILogger<CategoryController> logger;

        public CategoryController( ILogger<CategoryController> logger)
        {
            //this.repository = repository;
            this.logger = logger;
        }
        
        [HttpGet]
        

        public async Task<ActionResult<List<Category>>> Get()
        {
            logger.LogInformation("Getting all categories");
            return new List<Category>() { new Category() { Id = 1, Name = "Gastro Meds"} };
        }

        [HttpGet("{Id:int}", Name = "getCategory")]
        public ActionResult<Category> Get(int Id)
        {

            throw new NotImplementedException();    

        }

        [HttpPost]
        public ActionResult Post([FromBody] Category category)
        {
            throw new NotImplementedException();

        }

        [HttpPut]
        public ActionResult Put([FromBody] Category category)
        {


            throw new NotImplementedException();

        }

        [HttpDelete]
        public ActionResult Delete()
        {

            throw new NotImplementedException();

        }
    }
}
