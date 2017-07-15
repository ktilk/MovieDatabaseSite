using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories;
using Domain;

namespace BLL.Services
{
    public class MovieCategoryService
    {
        private readonly MovieCategoriesRepository _categoriesRepo;

        public MovieCategoryService()
        {
            _categoriesRepo = new MovieCategoriesRepository();
        }

        /// <summary>
        /// Gets all movie categories from repository
        /// </summary>
        /// <returns></returns>
        public List<Category> GetAllCategories()
        {
            return _categoriesRepo.GetAll();
        }
    }
}
