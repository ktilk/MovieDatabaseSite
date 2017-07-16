using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Domain;

namespace DAL.Repositories
{
    public class MoviesRepository
    {
        private readonly MoviesList _ml = InitializeMovies();
        
        /// <summary>
        /// Returns MovieList object
        /// </summary>
        /// <returns></returns>
        public MoviesList GetAll()
        {
            return _ml;
        }

        /// <summary>
        /// Returns a movie by ID from MovieList
        /// </summary>
        /// <param name="id">The ID of the movie</param>
        /// <returns></returns>
        public Movie GetById(int id)
        {
            return _ml.Movies.FirstOrDefault(m => m.MovieId == id);
        }

        /// <summary>
        /// Initializes MovieList object with some hard coded movies
        /// </summary>
        /// <returns></returns>
        public static MoviesList InitializeMovies()
        {
            var ml = new MoviesList();
            ml.Movies.Add(new Movie()
            {
                MovieId = 0,
                CategoryId = 0,
                Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                Rating = 10,
                Title = "The Shawshank Redemption",
                Year = 1994
            });
            ml.Movies.Add(new Movie()
            {
                MovieId = 1,
                CategoryId = 1,
                Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                Rating = 9,
                Title = "The Godfather",
                Year = 1972
            });
            ml.Movies.Add(new Movie()
            {
                MovieId = 2,
                CategoryId = 2,
                Description = "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
                Rating = 8,
                Title = "The Godfather: Part II",
                Year = 1974
            });
            ml.Movies.Add(new Movie()
            {
                MovieId = 3,
                CategoryId = 1,
                Description = "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                Rating = 7,
                Title = "The Dark Knight",
                Year = 2008
            });
            ml.Movies.Add(new Movie()
            {
                MovieId = 4,
                CategoryId = 0,
                Description = "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
                Rating = 6,
                Title = "12 Angry Men",
                Year = 1957
            });
            return ml;
        }
    }
}
