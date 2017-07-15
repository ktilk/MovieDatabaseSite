using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain;

namespace DAL.Repositories
{
    public class MovieCategoriesRepository
    {
        private readonly List<Category> _categories = InitializeCategories();

        /// <summary>
        /// Returns all movie categories
        /// </summary>
        /// <returns></returns>
        public List<Category> GetAll()
        {
            return _categories;
        }

        /// <summary>
        /// Initializes a list with some hard coded movie categories
        /// </summary>
        /// <returns></returns>
        private static List<Category> InitializeCategories()
        {
            var categories = new List<Category>
            {
                new Category()
                {
                    CategoryId = 0,
                    Name = "Comedy"
                },
                new Category()
                {
                    CategoryId = 1,
                    Name = "Action"
                },
                new Category()
                {
                    CategoryId = 2,
                    Name = "Drama"
                }
            };
            return categories;
        }
    }
}
