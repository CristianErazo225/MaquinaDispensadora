//------------------------------------------------------------------------------------------------
//Creacion de la Maquina
class MaquinaExpendedora{
    constructor(){
        this.p1 = new Producto('10', 'Papa Margarita', 1700);
        this.p2 = new Producto('20', 'Coca Cola', 2400);
        this.p3 = new Producto('30', 'Chocolatina Jumbo', 700);
        this.p4 = new Producto('40', 'Galletas Oreo', 1000);
    }

    darProducto1(){
        //Retorna el producto 1 (Papas Margarita)
        return this.p1;
    }

    darProducto2(){
        return this.p2;
    }

    darProducto3(){
        return this.p3;
    }

    darProducto4(){
        return this.p4;
    }

    abastecerProducto1(pUnidades){
        //Invoca al metodo abastecer de la clase producto 
        this.p1.abastecer(pUnidades);
    }

    abastecerProducto2(pUnidades){
        //Invoca al metodo abastecer de la clase producto 
        this.p2.abastecer(pUnidades);
    }

    abastecerProducto3(pUnidades){
        //Invoca al metodo abastecer de la clase producto 
        this.p3.abastecer(pUnidades);
    }

    abastecerProducto4(pUnidades){
        //Invoca al metodo abastecer de la clase producto 
        this.p4.abastecer(pUnidades);
    }

    venderProducto1(){
        //Vender Unidades del Producto 1
        if(this.p1.darCantidadUnidadesDisponibles() > 0){
            //Verifica si hay unidades disponibles y las vende
            this.p1.vender();
        }else{
            //Si no hay unidades - Se envia mensaje de alerta
            alert("No hay unidades del producto")
        }
    }

    venderProducto2(){
        //Vender Unidades del Producto 1
        if(this.p2.darCantidadUnidadesDisponibles() > 0){
            //Verifica si hay unidades disponibles y las vende
            this.p2.vender();
        }else{
            //Si no hay unidades - Se envia mensaje de alerta
            alert("No hay unidades del producto")
        }
    }

    venderProducto3(){
        //Vender Unidades del Producto 1
        if(this.p3.darCantidadUnidadesDisponibles() > 0){
            //Verifica si hay unidades disponibles y las vende
            this.p3.vender();
        }else{
            //Si no hay unidades - Se envia mensaje de alerta
            alert("No hay unidades del producto")
        }
    }

    venderProducto4(){
        //Vender Unidades del Producto 1
        if(this.p4.darCantidadUnidadesDisponibles() > 0){
            //Verifica si hay unidades disponibles y las vende
            this.p4.vender();
        }else{
            //Si no hay unidades - Se envia mensaje de alerta
            alert("No hay unidades del producto")
        }
    }

    darCantidadTotalVentas(){
        let cantidadTotal = this.p1.CantidadUnidadesVendidas() + 
                            this.p2.CantidadUnidadesVendidas() +
                            this.p3.CantidadUnidadesVendidas() +
                            this.p4.CantidadUnidadesVendidas();
        return cantidadTotal;
    }
    
    darValorTotalVentas(){
        let ValorVentas = this.p1.CantidadUnidadesVendidas() * this.p1.darPrecio() + 
                            this.p2.CantidadUnidadesVendidas() * this.p1.darPrecio() +
                            this.p3.CantidadUnidadesVendidas() * this.p1.darPrecio() +
                            this.p4.CantidadUnidadesVendidas() * this.p1.darPrecio();
        return ValorVentas;
    }

}
//------------------------------------------------------------------------------------------------
//Creacion de la clase Producto
class Producto{
    constructor(id, nombre, precio){
        //Crear el constructor de la clase producto
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.CantidadUnidadesDisponibles = 0;
        this.CantidadUnidadesVendidas = 0;
    }

    darIdentificador(){
        //Metodo que retorna el id del producto
        return this.id;
    }
    
    darNombre(){
        //Retorna el nombre
        return this.nombre;
    }
    
    darPrecio(){
        //metodo que retorna el precio
        return this.precio;
    }
    
    darCantidadUnidadesDisponibles(){
        return this.CantidadUnidadesDisponibles;
    }
    
    darCantidadUnidadesVendidas(){
        return this.CantidadUnidadesVendidas;
    }
    
    abastecer(pUnidades){
        //metodo que abastece un producto
        this.CantidadUnidadesDisponibles = this.CantidadUnidadesDisponibles + pUnidades;
    }
    
    vender(){
        //metodo que vende un producto(Quita de los disponibles y suma en ventas)
        this.CantidadUnidadesDisponibles -1;
        this.CantidadUnidadesVendidas + 1;
    } 
}
//------------------------------------------------------------------------------------------------
let m = new MaquinaExpendedora();

function Abastecer_Papas(){
    //Prompt - Abre una ventana pero recibe datos
    let cant = prompt("Ingrese el numero de unidades que abastecera el producto")
    m.abastecerProducto1(parseInt(cant))
    let disponible = m.darProducto1().darCantidadUnidadesDisponibles();
    //Busca el id = dis_Papas en ese parrafo coloca el texto 'Disponibles: ' + la variable
    document.getElementById('dis_Papas').innerHTML = 'Disponibles: ' + disponible;
}























