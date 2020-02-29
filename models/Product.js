// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  return knex
    .from('products')
    .select('*');
}

exports.insert = (product) => {
  return  knex('products')
        .insert(product, 'id')
}

function respondAndRenderProduct(id){
  if(typeof id != 'undefined'){
    return knex('products')
    .select()
    .where('id', id)
    .first()
  } else{
    res.status(500);
    res.render('error', {
      message: 'Invalid ID'
    });
  }
}

exports.retrieve = (id) => {
  return respondAndRenderProduct(id)
}

exports.updateProduct = (id, product) => {
  return knex('products')
  .where('id', id)
  .update({...product})
}

exports.deleteProduct = (id) => {
  return knex('products')
  .where('id', id)
  .del()
}
