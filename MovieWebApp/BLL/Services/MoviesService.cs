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

        public MoviesList GetAllMovies()
        {
            return _moviesRepo.GetAll();
        }

        public Movie GetMovie(int id)
        {
            return _moviesRepo.GetById(id);
        }
    }
}
