db.movieDetails.find({
    $and: [{
        'genres':'Comedy'
    },{
        'genres':'Crime'
    }]
}).count();