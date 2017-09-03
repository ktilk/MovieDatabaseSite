using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories;
using Domain;

namespace BLL.Services
{
    public class MoviesService
    {
        private readonly MoviesRepository _moviesRepo;

        public MoviesService()
        {
            _moviesRepo = new MoviesRepository();
        }

        /// <summary>
        /// Gets all movies from repository
        /// </summary>
        /// <returns></returns>
        public MoviesList GetAllMovies()
        {
            return _moviesRepo.GetAll();
        }

        /// <summary>
        /// Gets a movie by ID from repository
        /// </summary>
        /// <param name="id">The ID of the movie</param>
        /// <returns></returns>
        public Movie GetMovie(int id)
        {
            return _moviesRepo.GetById(id);
        }

        public void AddMovie(Movie movie)
        {
            _moviesRepo.AddMovie(movie);
        }
    }
}
