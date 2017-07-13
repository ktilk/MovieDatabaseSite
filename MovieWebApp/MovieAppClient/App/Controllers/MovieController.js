app.controller("movieController", function ($scope, $routeParams, moviesService) {
    console.log("movieController activated!");

    var movieId = $routeParams.id;
    $scope.categories = [];

    function initCategories() {
        $scope.categories.push({ id: 0, name: "Comedy" });
        $scope.categories.push({ id: 1, name: "Action" });
        $scope.categories.push({ id: 2, name: "Drama" });
    }

    init();

    function init() {
        console.log("Init called");
        initCategories();
        console.log($scope.categories);
        if (movieId) {
            getById(movieId);
        } else {
            getMovies();
        }
    }

    function getMovies() {
        console.log("getMovies from controller called");
        moviesService.getMovies().then(function (resp) {
            console.log("Movies retrieved:");
            $scope.movies = resp.data.Movies;
            console.log($scope.movies.Movies);
        });
    }

    function getById(id) {
        console.log("getById " + id + " called from controller");
        moviesService.getMovieById(id).then(function (resp) {
        $scope.movie = resp.data;
        });
    }
});