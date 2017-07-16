app.service("moviesService", function ($http) {

    this.getMovies = function() {
        var resp = $http.get(moviesApiUri);
        return resp;
    };

    this.getMovieById = function(id) {
        var resp = $http.get(moviesApiUri + id);
        return resp;
    };

    this.getMovieCategories = function() {
        var resp = $http.get(movieCategoriesApiUri);
        return resp;
    };
});