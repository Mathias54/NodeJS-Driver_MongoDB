var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/escola';

MongoClient.connect(url, function(err, db) {

    if(err){
      console.log('Erro ao conectar')
      return
    } else {
      console.log('Successfully connected to server');
    }

    db.collection('alunos').find({}, {nome:0}).toArray(function(err, docs) {

        docs.forEach(function(doc) {
            console.log(doc._id);
        });

        db.close();
    });

    console.log('Called find()');
});

// é criada uma variável que recebe o require do mongodb;
// e é pedido o valor MongoClient
// para se conectar ao mongodb basta criar uma url contendo as infos para conexao
// como
