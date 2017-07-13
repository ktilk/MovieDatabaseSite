var app = angular.module("MovieApp", ["ngRoute", "ui.bootstrap"]);

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
        movies.forEach(function(movie) {
            var categoryId = movie.CategoryId;
            var category = searchFilter.categories.find(c => c.id === categoryId);
            if (movie.Title.indexOf(searchFilter.title) !== -1 && category.selected) {
                out.push(movie);
            }
        });
        return out;
    };
});