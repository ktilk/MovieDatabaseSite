angular.module("MovieApp", ["ngRoute", "angucomplete"]);

angular.module("MovieApp").config(function ($routeProvider) {
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