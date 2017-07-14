var app = angular.module("MovieApp", ["ngRoute", "angucomplete"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/",
        {
            controller: "movieController",
            templateUrl: "Partials/movies.html"
        })
        .when("/movieDetails/:id",
        {
            controller: "movieController",
            templateUrl: "Partials/movieDetailView.html"
        });

    $routeProvider.otherwise({ redirectTo: "/" });
});

app.filter("movieFilter", function () {
    return function(movies, searchFilter) {
        var out = [];

        movies.forEach(function (movie) {
            var movieTitle = movie.Title.toLowerCase(); //convert movie title to lower case for comparison
            var filterTitle;

            if (searchFilter.movie) {
                filterTitle = searchFilter.movie.title.toLowerCase(); //use autocomplete result
            } else {
                filterTitle = searchFilter.title.toLowerCase(); //use textbox value
            }

            //select this movies category from filter
            var category = searchFilter.categories.find(c => c.id === movie.CategoryId);

            //check if movie title contains title in filter and if category of movie is selected
            if (movieTitle.indexOf(filterTitle) !== -1 && category.selected) {
                out.push(movie);
            }
        });
        return out;
    };
});