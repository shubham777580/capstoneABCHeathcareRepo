using healthcareapi.Entities;

namespace healthcareapi.Services
{
    public interface IRepository
    {
        Task<List<Category>> GetAllCategory();
        Category GetCategoryById(int Id);

      
    }
}
