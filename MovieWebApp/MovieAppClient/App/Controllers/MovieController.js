app.controller("movieController", function ($scope, $routeParams, moviesService) {
    console.log("movieController activated!");

    var movieId = $routeParams.id;

    $scope.searchFilter = {
        title: "",
        categories: []
    };

    init();
    
    function markAsSelected() {
        $scope.searchFilter.categories.forEach(function(category) {
            category.selected = true;
        });
    }

    function init() {
        console.log("Init called");
        initCategories();
        markAsSelected();
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

    function initCategories() {
        $scope.searchFilter.categories.push({ id: 0, name: "Comedy" });
        $scope.searchFilter.categories.push({ id: 1, name: "Action" });
        $scope.searchFilter.categories.push({ id: 2, name: "Drama" });
    }

    //TODO dont get categories from searchFilter
    $scope.getCategory = function(id) {
        return $scope.searchFilter.categories.find(c => c.id === id);
    };
});