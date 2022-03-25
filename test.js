
const Contenedor = require('./container.js');

const products = require('./products.js');

const app = require('./index.js');


const producto = new Contenedor("./products.txt")


app.get("/products",(req,res)=>{

    producto.getAll()

    .then(resp => res.send(resp))

})



app.get("/productoRandom",(req,res)=>{
    product.getAll()

    .then(resp => res.send(
        resp[
            Math.floor(Math.random()*resp.length)
        ]
    ))
})







/* const Contenedor = require('./challenge1.js')
const products = require('./products.js')


const product = new Contenedor("./products.txt")
product.save(products) 
producto.getById(1)
producto.getAll()
producto.deleteById(1)
producto.deleteAll() */