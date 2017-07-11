var app = angular.module("MovieApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/index",
        {
            controller: "moviesController",
            templateUrl: "/app/views/index.html"
        })
        .when("/details/:id",
        {
            controller: "moviesController",
            templateUrl: "/app/views/moviedetailview.html"
        });

    $routeProvider.otherwise({ redirectTo: "/index" });
});