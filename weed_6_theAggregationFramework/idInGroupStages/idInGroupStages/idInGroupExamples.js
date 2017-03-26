/*
 Nesse query estou fazendo um match em todos os documentos
 que são do ano de 2010 ou anos maiores, e agrupando todos
 esses resultador pelo ano que foram criados. Ainda, add
 todos os nomes da empresas em um array que chamo de
 companies;
 */
db.companies.aggregate([
    { $match: { founded_year: { $gte: 2010 } } },
    { $group: {
        _id: { founded_year: "$founded_year"},
        companies: { $push: "$name" }
    } },
    { $sort: { "_id.founded_year": 1 } }
]).pretty()

/*
 seguindo a mesmo lágica do primeiro, mas invés de criar um array
 estou criando uma lista de documentos que irá contar o nome
 e as tag_lists de cada empresa.
 */

db.companies.aggregate([
    { $match: { founded_year: { $gte: 2010 } } },
    { $group: {
        _id: { founded_year: "$founded_year"},
        companies: { $push: {nome:"$name", tag: "$tag_list"} },

    } },
    { $sort: { "_id.founded_year": 1 } }
]).pretty()


/*
 Aqui existe apenas uma pequena diferença entre a primeira
 query. Onde em
 */
db.companies.aggregate([
    { $match: { founded_year: { $gte: 2010 } } },
    { $group: {
        _id: "$founded_year",
        companies: { $push: "$name" }
    } },
    { $sort: { "_id": 1 } }
]).pretty()


/*
Essa query tem como objetivo filtar os documentos que o ano
seja maior ou igual a 2010. No aggregate
 */
db.companies.aggregate([
    { $match: { founded_year: { $gte: 2010 } } },
    { $group: {
        _id: { founded_year: "$founded_year", category_code: "$category_code" },
        companies: { $push: "$name" }
    } },
    { $sort: { "_id.founded_year": 1 } }
]).pretty()


db.companies.aggregate([
    { $group: {
        _id: { ipo_year: "$ipo.pub_year" },
        companies: { $push: "$name" }
    } },
    { $sort: { "_id.ipo_year": 1 } }
]).pretty()

/*
Essa query é bem interessante. Ela vai gerar vários documentos
 */
db.companies.aggregate( [
    { $match: { "relationships.person": { $ne: null } } },
    { $project: { relationships: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person",
        count: { $sum: 1 }
    } },
    { $sort: { count: -1 } }
] )

