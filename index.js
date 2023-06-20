class ProductManagers {
    constructor(){
        this.products =[];
        this.nuevoID=1;
    }

    addProduct(title, description, price, thumbnail, code, stock){

        const productExiste = this.products.find((producto) => producto.code === code);
        
        if (productExiste) {
            console.log(
            `El producto ${title} tine un error, el codigo ${code} está repetido, producto existente ${producto.Existe.title}"`
            );
            return;
        }
        if(!title || !description || !price || !thumbnail || !code ||!stock) {
            console.log(
            `Todos los campos son obligatorios del producto ${title} que estas queriendo ingresar`
            );
        }
        else{
        const producto = {
            id: this.nuevoID++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(producto);
        {
            console.log(`el producto ${producto.title} se agregó correctamente`);
        }
      }
    }
    getProduct(){
        return this.products;
    }
    getProductById(id){
        const productoId = this.products.find((producto) => producto.id === id);
        {
            if(!productoId){
                console.log(`"Not Found" el Id N° "${id}" del producto no existe`);
            }
            else{
                console.log(`El producto con el id "${id}"fue encontrado`);
                return productoId;
            }
        }
    }
}
const producto =new ProductManagers();
producto.addProduct(`tituloUno`,`descripciónUno`,600,`imageUno`,`codigoUno`, 1);
producto.addProduct(`tituloDos`,`descripciónDos`,900,`imageDos`,`codigoDos`, 2);
producto.addProduct(`tituloTres`,`descripciónTres`,800,`imageTres`,`codigoTres`, 3);
producto.addProduct(`tituloCuatro`,`descripciónCuatro`,100,`imageCuatro`,`codigoCuatro`, 4);
console.log(producto.getProduct());
producto.getProductById(1);