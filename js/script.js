// src, titulo, texto, id
class Articulos{
    constructor(id,cant,title, text, stock,genero,precio,existencia){
        this.id=id;
        this.cant=cant;
        this.title=title;
        this.text=text;
        this.stock=stock;
        this.genero=genero;
        this.precio=precio;
        this.existencia=existencia;
    }
}
let art1=new Articulos (1,1,'Calamaro','lorem!',20,'rock',120.00,true);
let art2=new Articulos (2,1,'Rodriguez','lorem!',10,'romantico',120.00,true);
let art3=new Articulos (3,1,'Divididos','lorem!',25,'rock',120.00,true);
let art4=new Articulos (4,1,'Charly García','lorem!',16,'rock',120.00,true);
let art5=new Articulos (5,1,'Intoxicados','lorem!',18,'rock',120.00,true);
let art6=new Articulos (6,1,'Redondos','lorem!',12,'rock',120.00,true);
if (localStorage.getItem("carrito")){
    mostrarCarrito();
}
let arrayVentas=[];
function verifica(art) {
    for (indice of arrayVentas) {
        if (art.id==indice.id){
            return true;
        }
    }
    return false;
}

function agregarVentas(art) {
    if (verifica(art)==false){
        arrayVentas.push(art);
    } else {
        art.cant++;
    }
    auxiliar=JSON.stringify(arrayVentas);
    localStorage.setItem('carrito',auxiliar);
}

const boton1 = document.querySelector("#boton1");
boton1.addEventListener("click",()=>{
    agregarVentas(art1);
    mostrarCarrito();
})
const boton2 = document.querySelector("#boton2");
boton2.addEventListener("click",()=>{
    agregarVentas(art2);
    mostrarCarrito();
})
const boton3 = document.querySelector("#boton3");
boton3.addEventListener("click",()=>{
    agregarVentas(art3);
    mostrarCarrito();
})
const boton4 = document.querySelector("#boton4");
boton4.addEventListener("click",()=>{
    agregarVentas(art4);
    mostrarCarrito();
})
const boton5 = document.querySelector("#boton5");
boton5.addEventListener("click",()=>{
    agregarVentas(art5);
    mostrarCarrito();
})
const boton6 = document.querySelector("#boton6");
boton6.addEventListener("click",()=>{
    agregarVentas(art6);
    mostrarCarrito();
})
const btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click",()=>{
    // localStorage.setItem("carrito",[])
    localStorage.clear();
    mostrarCarrito();
})
function mostrarCarrito(){
    let arr=JSON.parse(localStorage.getItem('carrito'));
    let totalCarro = document.getElementById ("totalCarro");
    for (let i=0;i<arr.length;i++){
        let etiquetaP= document.createElement ("p");
        etiquetaP.innerHTML=`ID: ${arr[i].id} TITULO: ${arr[i].title} CANTIDAD: ${arr[i].cant} PRECIO:${arr[i].precio} <br>`
        totalCarro.appendChild(etiquetaP);
    }
    
}
// function mostrarCarrito(){
//     limpiarCarrito();
//     let arr=JSON.parse(localStorage.getItem('carrito'));
//     let totalCarro = document.getElementById ("totalCarro");
//     for (let i=0;i<arr.length;i++){
//         let etiquetaP= document.createElement ("p");
//         etiquetaP.innerText=`ID: ${arr[i].id} TITULO: ${arr[i].title} CANTIDAD: ${arr[i].cant} PRECIO:${arr[i].precio}`
//         totalCarro.appendChild(etiquetaP);
//     }
// }
// contenedor.hasChildNodes(); true o false
