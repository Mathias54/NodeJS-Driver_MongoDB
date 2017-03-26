// How many documents in our video.movieDetails collection list just the following two genres: "Comedy" and "Crime" with "Comedy" listed first.

db.movieDetails.find({
    $and: [{
        'genres': { 
            $size: 2
        }
    },{
        'genres.0':'Comedy'
    },{
        'genres.1':'Crime'
    }]
}).count();
