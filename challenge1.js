
const fs = require ('fs')

const products = require('./products.js')

class Contenedor{

    constructor(file){
        this.file = file;
    }

    async save(objeto){

        try {
            for(let i=0; i< objeto.length;i++){
                objeto[i].id= 1+ i
            }
            console.table(objeto)
            await fs.promises.writeFile(this.file,JSON.stringify(objeto))


        } catch (error) {
            throw new Error(error,'Error al guardar el producto')
        }
    }

    
    async getById(id){
        try{
            const content = await this.getAll()
            let idencontrado = content.find(prod => prod.id === id)
            console.table(idencontrado)
        }catch(error){
            throw new Error(error,"Error al intentar traer el producto")
        }
    }
    
    async getAll(){
        try{
            let content = await fs.promises.readFile(this.file, "utf8");
            return JSON.parse(content)
        } catch(error){
            throw new Error(error,"Error al intentar leer el archivo")
        }
    }
/////////
    

    async deleteById(id){
        try{
            const content = await this.getAll()
            const deleted = content.filter(producto => producto.id !== id)
            await fs.promises.writeFile(this.file, JSON.stringify(deleted,null,4))
            console.log('Eliminado')
            console.table(deleted)
        }catch(error){
            throw new Error(error,"Error al borrar el producto")
        }
    }




    async deleteAll(){
        try{
            await fs.promises.writeFile(this.file, []);
            console.log("Contenido borrado")
        } catch(error){
            throw new Error(error,"Error al borrar")
        }
    }
}



module.exports = Contenedor;