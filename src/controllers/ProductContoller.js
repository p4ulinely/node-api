const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
	async index(req, res){
		try {
			const products = await Product.find().sort({

				//ordena desc pela parametro 'CreatedAt'
				createdAt: -1
			});

			return res.json(products);
		} catch(err) {
			return res.status(400).json({
				msg: err
			});
		}
	},

	async show(req, res){
		try {
			const product = await Product.findById(req.params.id);
			return res.json(product);
		} catch(err) {
			return res.status(400).json({
				msg: err
			});
		}
	},

	async store(req, res){
		try {
			const products = await Product.create(req.body);
			return res.json(products);
		} catch(err) {
			return res.status(400).json({
				msg: err
			});
		}		

	},

	async update(req, res){
		try {
			const product = await Product.findByIdAndUpdate(req.params.id, req.body, {

				//quando retornar, retorna o produto ja' atualizado
				new: true
			});

			return res.json(product);
		} catch(err) {
			return res.status(400).json({
				msg: err
			});
		}
	},

	async destroy(req, res){
		try {
			await Product.findByIdAndRemove(req.params.id);
			return res.send();
		} catch(err) {
			return res.status(400).json({
				msg: err
			});
		}
	}
}