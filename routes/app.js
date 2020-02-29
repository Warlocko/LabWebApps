// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');


// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

router.get('/create', PagesController.create);

router.post('/create', PagesController.addProduct);

router.get('/products/:id', PagesController.retrieveProduct);

router.get('/products/:id/edit', PagesController.editProduct);

router.post('/products/:id/edit', PagesController.updateProduct);

router.get('/delete/:id', PagesController.deleteProduct);

// Exporta las configuraciones
module.exports = router;