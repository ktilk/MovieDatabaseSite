using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using BLL.Services;

namespace MovieWebAPI.Tests.Services
{
    [TestClass]
    public class MoviesServiceTests
    {
        private MoviesService _moviesService;

        private int _movieId;
        private string _title;
        private int _year;
        private string _description;
        private int _rating;
        private int _categoryId;

        /// <summary>
        /// Sets up the test
        /// </summary>
        [TestInitialize]
        public void SetUp()
        {
            _moviesService = new MoviesService();
            InitialiseParameters();
        }

        private void InitialiseParameters()
        {
            _movieId = 0;
            _title = "The Shawshank Redemption";
            _year = 1994;
            _description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.";
            _rating = 10;
            _categoryId = 0;
        }

        [TestMethod]
        public void TestMovieService()
        {
            GetAllMovies();
            GetMovieById(_movieId);
        }

        /// <summary>
        /// Gets all movies
        /// </summary>
        public void GetAllMovies()
        {
            //Act
            var moviesList = _moviesService.GetAllMovies();

            //Assert
            Assert.IsNotNull(moviesList);
            Assert.IsTrue(moviesList.Movies.Any(), "GetAllMovies returned no movies.");
        }

        /// <summary>
        /// Gets a movie by ID
        /// </summary>
        /// <param name="id">The ID of the movie</param>
        public void GetMovieById(int id)
        {
            //Act
            var movie = _moviesService.GetMovie(id);

            //Assert
            Assert.IsNotNull(movie, "GetByID returned null.");
            Assert.AreEqual(id, movie.MovieId, "Requested ID and MovieId are not the same");
            Assert.AreEqual(_title, movie.Title);
            Assert.AreEqual(_categoryId, movie.CategoryId);
            Assert.AreEqual(_description, movie.Description);
            Assert.AreEqual(_rating, movie.Rating);
            Assert.AreEqual(_year, movie.Year);
            Assert.IsNull(_moviesService.GetMovie(-1), "Movie shouldn't have negative ID");
        }
    }
}
