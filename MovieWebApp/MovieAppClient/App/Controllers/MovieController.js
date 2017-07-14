app.controller("movieController", function ($scope, $routeParams, moviesService) {
    console.log("movieController activated!");

    var movieId = $routeParams.id;
    $scope.categories = [];
    $scope.movies = [];
    $scope.searchFilter = {
        title: "",
        categories: []
    };

    init();

    function markAsSelected(filterCategories) {
        filterCategories.forEach(function(category) {
            category.selected = true;
        });
    }

    function init() {
        console.log("Init called");
        //getCategories();
        initCategories();
        setSearchFilter();
        console.log("categories from init");
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
            console.log($scope.movies);
        });
    }

    function getById(id) {
        console.log("getById " + id + " called from controller");
        moviesService.getMovieById(id).then(function (resp) {
            $scope.movie = resp.data;
        });
    }

    function getCategories() {
        moviesService.getMovieCategories().then(function (resp){
            $scope.categories = resp.data;
            console.log("Categories from controller");
            console.log($scope.categories);
        });
    }

    $scope.getCategory = function(id) {
        return $scope.categories.find(c => c.id === id);
    };

    function setSearchFilter() {
        $scope.searchFilter.categories = $scope.categories;
        markAsSelected($scope.searchFilter.categories);
    }

    function initCategories() {
        $scope.categories.push({ id: 0, name: "Comedy" });
        $scope.categories.push({ id: 1, name: "Action" });
        $scope.categories.push({ id: 2, name: "Drama" });
    }
});