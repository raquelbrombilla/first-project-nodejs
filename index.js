var express = require('express');
var index = express();
 
index.set('view engine', 'ejs');

index.get('/home', function(req, res) {
    res.render('../views/home');
});

//request and response
index.get('/', function(req, res){
    res.json({ nome: "Raquel", idade: 19 });
});

index.get('/form/:nome/:sobrenome?', function(req, res){
    if(req.params.sobrenome == undefined){
        res.send("<h1> Olá "+ req.params.nome + "!!!</h1>");
    } else{
        res.send("<h1> Olá "+ req.params.nome +" "+ req.params.sobrenome + "</h1>");
    }
});

index.get('/cadastro', function(req, res){
    let name = req.query['name'];
    if(name){
        res.send('<h1>'+ name +'</h1>');    
    } else {
        res.send('<h1>Nenhum name foi passado</h1>');
    }
});

index.listen(3000, function(){
    console.log('Executando na porta 3000!');
})