app.service("moviesService", function ($http) {
    var requestUri = "http://localhost:50142/api/movies";
    this.getMovies = function() {
        console.log("getMovies from service called");
        var resp = $http.get(requestUri);
        console.log(resp);
        return resp;
    };

    this.getMovieById = function(id) {
        console.log("getMovieById from service called");
        return $http.get(requestUri + id);
    };
});