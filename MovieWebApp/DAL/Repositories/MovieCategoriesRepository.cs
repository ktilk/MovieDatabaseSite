﻿using System;
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

        private static List<Category> InitializeCategories()
        {
            var categories = new List<Category>();
            categories.Add(new Category()
            {
                CategoryId = 0,
                Name = "Comedy"
            });
            categories.Add(new Category()
            {
                CategoryId = 1,
                Name = "Action"
            });
            categories.Add(new Category()
            {
                CategoryId = 2,
                Name = "Drama"
            });
            return categories;
        }

        public List<Category> GetAll()
        {
            return _categories;
        }
    }
}