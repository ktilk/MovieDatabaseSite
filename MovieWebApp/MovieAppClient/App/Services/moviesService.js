angular.module("MovieApp").factory("moviesService", moviesService);

function moviesService ($http) {
    var service = {
        getMovies: getMovies,
        getMovieById: getMovieById,
        getMovieCategories: getMovieCategories
    };
    return service;

    function getMovies() {
        var resp = $http.get(moviesApiUri);
        return resp;
    }

    function getMovieById(id) {
        var resp = $http.get(moviesApiUri + id);
        return resp;
    }

    function getMovieCategories() {
        var resp = $http.get(movieCategoriesApiUri);
        return resp;
    }
}