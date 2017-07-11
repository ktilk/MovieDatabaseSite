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

        public MoviesList GetMovies()
        {
            return _service.GetAllMovies();
        }

        public Movie GetMovieById(int id)
        {
            return _service.GetMovie(id);
        }
    }
}
