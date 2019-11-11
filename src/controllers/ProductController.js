const mongoose = require('../../database');
const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    // const products = await Product.find();

    // passando por parametro a página que desejo na url
    // no caso adotaremos o req.query pois ele é para parametros da nossa rota
    const { page = 1 } = req.query;

     // lidando com paginação
     const products = await Product.paginate({}, { page, limit:10 });

    // req.params 
    // req.body 

    return res.json(products);
  },

  async store(req, res) {
    // req possui todas as informações de uma requisição 
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new : true }); // new true ele vai atualizar o produto
    return res.json(product); 
  },

  async destroy(req,res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send({message: 'Produto removido com sucesso'});
  }
};