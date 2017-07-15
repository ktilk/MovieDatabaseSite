using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BLL.Services;
using Domain;

namespace MovieWebAPI.Controllers
{
    public class MovieCategoriesController : ApiController
    {
        private readonly MovieCategoryService _categoryService;

        public MovieCategoriesController()
        {
            _categoryService = new MovieCategoryService();
        }

        /// <summary>
        /// Returns a list of movie categories
        /// </summary>
        /// <returns></returns>
        public List<Category> GetMovieCategories()
        {
            return _categoryService.GetAllCategories();
        }
    }
}
