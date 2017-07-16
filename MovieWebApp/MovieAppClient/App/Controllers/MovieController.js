app.controller("movieController", function ($scope, $routeParams, moviesService) {
    
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
        //getCategories();
        initCategories();
        setSearchFilter();
        if (movieId) {
            getById(movieId);
        } else {
            getMovies();
        }
    }

    function getMovies() {
        moviesService.getMovies().then(function (resp) {
            $scope.movies = resp.data.Movies;
        });
    }

    function getById(id) {
        moviesService.getMovieById(id).then(function (resp) {
            $scope.movie = resp.data;
        });
    }

    function getCategories() {
        moviesService.getMovieCategories().then(function (resp){
            $scope.categories = resp.data;
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
        $scope.categories.push({ id: 3, name: "Goofy" });
    }
});