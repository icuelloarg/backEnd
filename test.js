const Contenedor = require('./challenge1.js')
const products = require('./products.js')


const product = new Contenedor("./products.txt")
product.save(products) 
//producto.getById(1)
//producto.getAll()
//producto.deleteById(1)
//producto.deleteAll()