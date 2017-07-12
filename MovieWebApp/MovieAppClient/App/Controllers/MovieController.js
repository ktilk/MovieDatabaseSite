app.controller("movieController", function ($scope, moviesService) {
    console.log("movieController activated!");

    $scope.movies = [];

    init();

    function init() {
        getMovies();
    }

    function getMovies() {
        console.log("getMovies from controller called");
        moviesService.getMovies().then(function (resp) {
            $scope.movies = resp.data;
        });
        console.log($scope.movies);
    }

        $scope.getById = function(id) {
            return moviesService.getMovieById(id);
        }
    });