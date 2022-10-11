using healthcareapi.Entities;

namespace healthcareapi.Services
{
    public class InMemoryRespository : IRepository
    {
        private List<Category> _category;
        public InMemoryRespository()
        {
            _category = new List<Category>()
            {
                new Category(){Id = 1, Name = "Gastro Meds"},
                new Category(){Id = 2, Name = "Generic Meds"},
                new Category(){Id = 3, Name = "Sugar Meds"}
            };

        }

        public async Task<List<Category>> GetAllCategory()
        {
            await Task.Delay(1);
            return _category;
        }

        public Category GetCategoryById(int Id)
        {
            return _category.FirstOrDefault(x => x.Id == Id);
        }
    }
}
