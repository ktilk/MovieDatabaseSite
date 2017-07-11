using System;

namespace Domain
{
    public class Movie
    {
        public int MovieId { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public int CategoryId { get; set; }
    }
}