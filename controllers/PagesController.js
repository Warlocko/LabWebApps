// Importa el modelo de productos
let ProductModel = require('../models/Product')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let products = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { products: products });
    });
}

exports.create = (req,res) => {
  res.render('pages/create');
}

function validateProduct(product){
  return product.name.trim() != '';
}

exports.addProduct = (req,res) => {
  if(validateProduct(req.body)){
    let product = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    }

   ProductModel.insert(product)
   .then(ids => {
    id = ids[0];
    res.redirect('/products/'+id);
  })

  } else{
    res.status(500);
    res.render('error', {
      message: 'Invalid Product'
    });
  }
}

exports.retrieveProduct = (req,res) => {
  ProductModel.retrieve(req.params.id)
    .then(product => {
    console.log(product);
    res.render('pages/single', {product:product})
    });
}

exports.editProduct = (req,res) => {
  ProductModel.retrieve(req.params.id)
    .then(product => {
    console.log(product);
    res.render('pages/edit', {product:product})
    });
}

exports.updateProduct = (req,res) => {
  if(validateProduct(req.body)){
    let product = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    }

   ProductModel.updateProduct(req.params.id,product)
   .then(ids => {
    id = ids[0];
    res.redirect('/products/'+req.params.id);
  })

  } else{
    res.status(500);
    res.render('error', {
      message: 'Invalid Product'
    });
  }
}

exports.deleteProduct = (req,res) => {
  ProductModel.deleteProduct(req.params.id)
  .then(
    res.redirect('/')
  );
}

