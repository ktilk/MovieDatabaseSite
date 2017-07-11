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
        private readonly MoviesRepository _repo;

        public MoviesService()
        {
            _repo = new MoviesRepository();
        }

        public MoviesList GetAllMovies()
        {
            return _repo.GetAll();
        }

        public Movie GetMovie(int id)
        {
            return _repo.GetById(id);
        }
    }
}
