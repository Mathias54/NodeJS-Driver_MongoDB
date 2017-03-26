// db.companies.aggregate([
//     {
//         $match: {"founded_year": { $gte: 2005 }, "funding_rounds" : { $size: 5}}
//     },    
// ]);
//{$unwind: "$$funding_rounds"}

// _id : ObjectId("52cdef7c4bab8bd675297dc3")
     
// db.companies.aggregate([
//     { $project: {_id:1, name:1, funding_rounds:1, founded_year:1, media: { $avg: "$funding_rounds.raised_amount"}}},
//     { $match: {"founded_year": { $gte: 2005 }, "funding_rounds.4" : {$exists : true}}},
//     { $sort: {media:1}}
// ]);

db.companies.aggregate([
    { $project: {_id:1, name:1, funding_rounds:1, size_of_array: {$size: "$funding_rounds"}, founded_year:1, media: { $avg: "$funding_rounds.raised_amount"}}},
    { $match: {"founded_year": 2004, "size_of_array": {$gte: 5}}},
    { $sort: {media:1}}
]);
// db.companies.aggregate([
//     { $project: {_id:1, name:1, funding_rounds:1, size_of_array: {$size: "$funding_rounds"}, founded_year:1, media: { $avg: "$funding_rounds.raised_amount"}}},
//     { $match: {_id : ObjectId("52cdef7c4bab8bd675297dc3")}
// ]);

//{ $match: {"funding_rounds.4" : {$exists : true} }}