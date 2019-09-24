const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando app
const app = express();

//iniciando BD
mongoose.connect("mongodb://localhost/appTeste", { 
	useNewUrlParser: true
}).then(() => {
	console.log('MongoDB is on!');

}).catch((err) => {
	console.log(`MongoDB/Falha: ${err}`);
})

//carregando todos os models
requireDir('./src/models');

//rotas
app.get('/', (req, res) => {
	res.send("<p align='center'>/get app</p>");
});

app.use('/api', require('./src/routes'));

//porta
app.listen(8000, () => {
	console.log('Server is On!');
});