var app = angular.module("MovieApp", ["ngRoute"]);
console.log("MovieApp module started!");
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