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
    public class MoviesController : ApiController
    {
        private readonly MoviesService _service;

        public MoviesController()
        {
            _service = new MoviesService();
        }

        /// <summary>
        /// Returns a list of movies
        /// </summary>
        /// <returns></returns>
        public MoviesList GetMovies()
        {
            return _service.GetAllMovies();
        }

        /// <summary>
        /// Finds a movie by ID
        /// </summary>
        /// <param name="id">The ID of the movie</param>
        /// <returns></returns>
        public Movie GetMovieById(int id)
        {
            return _service.GetMovie(id);
        }

        public void AddMovie(Movie movie)
        {
            _service.AddMovie(movie);
        }
    }
}
