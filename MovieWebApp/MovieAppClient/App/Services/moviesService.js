app.service("moviesService", function ($http) {

    var apiUri = "http://localhost:50142/api/";

    this.getMovies = function() {
        console.log("getMovies from service called");
        var resp = $http.get(apiUri + "movies/");
        return resp;
    };

    this.getMovieById = function(id) {
        console.log("getMovieById from service called");
        var resp = $http.get(apiUri + "movies/" + id);
        return resp;
    };

    this.getMovieCategories = function() {
        console.log("getMovieCategories service called");
        var resp = $http.get(apiUri + "movieCategories/");
        return resp;
    };
});