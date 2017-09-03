angular.module("MovieApp").controller("movieController", movieController);

function movieController($routeParams, moviesService) {
    var vm = this;
    var movieId = $routeParams.id;
    vm.title = "Movies";
    vm.categories = [];
    vm.movies = [];
    vm.searchFilter = {
        title: "",
        categories: []
    };
    vm.newMovie = {
        movieId: 0,
        title: "",
        year: "",
        description: "",
        rating: "",
        categoryId: 0
    }
    vm.getCategory = getCategory();
    vm.addMovie = addMovie(vm.newMovie);

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
            vm.movies = resp.data.Movies;
        });
    }

    function getById(id) {
        moviesService.getMovieById(id).then(function (resp) {
            vm.movie = resp.data;
        });
    }

    function addMovie(movie) {
        console.log("addMovie from MovieController called");
        moviesService.addMovie(movie);
    }

    function getCategories() {
        moviesService.getMovieCategories().then(function (resp){
            vm.categories = resp.data;
        });
    }

    function getCategory(id) {
        return vm.categories.find(c => c.id === id);
    }

    function setSearchFilter() {
        vm.searchFilter.categories = vm.categories;
        markAsSelected(vm.searchFilter.categories);
    }

    function initCategories() {
        vm.categories.push({ id: 0, name: "Comedy" });
        vm.categories.push({ id: 1, name: "Action" });
        vm.categories.push({ id: 2, name: "Drama" });
        vm.categories.push({ id: 3, name: "Goofy" });
    }

    var category = function Category(id, name) {
        this.id = id;
        this.name = name;
    };
}