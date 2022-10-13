using System.ComponentModel.DataAnnotations;

namespace healthcareapi.Entities
{
    public class Category
    {
        public int Id { get; set; }

        [Required (ErrorMessage = "The Field with name {0} is required")]
       
        public string Name { get; set; }


    }
}
