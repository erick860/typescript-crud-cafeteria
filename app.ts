const menuCafeteria = [
  "Café Espresso Clásico",
  "Café Doble Ristretto",
  "Café Americano Intenso",
  "Café Espresso Macchiato",
  "Café Cappuccino Italiano",
  "Café Latte Saborizado Vainilla",
  "Café Flat White Doble Shot",
  "Café Mocha ChocoBlanco",
  "Café Cold Brew Artesanal 24hs",
  "Té Hebras Verde Matcha Premium",
  "Té Hebras Chai Latte Especiado",
  "Té Hebras Earl Grey Bergamota",
  "Submarino Chocolate Artesanal",
  "Medialuna de Manteca Tradicional",
  "Medialuna de Grasa Crocante",
  "Croissant Relleno Nutella",
  "Croissant Jamón y Queso Horneado",
  "Tostado Mixto en Pan de Campo",
  "Avocado Toast Huevo Poché",
  "Muffin de Arándanos y Limón",
  "Muffin Chocolate con Chips",
  "Scone Tradicional de Vainilla",
  "Tarta Carrot Cake Nuez",
  "Tarta Cheesecake de Frutos Rojos",
  "Tarta Lemon Pie Merengue",
  "Alfajor Artesanal de Dulce de Leche",
  "Cookie de Avena y Pasas",
  "Cookie Red Velvet Rellena",
  "Jugo Natural Naranja Exprimido",
  "Jugo Licuado Frutilla y Banana"
];


function mostrarMenu() {
    menuCafeteria.forEach((producto, indice) => {
        console.log(indice+1,"-" ,producto)
    });
}

function generarCodigosMenu() {
    const codigos = menuCafeteria.map((producto, indice) => {
return `CAF-${indice+101} - ${producto}`;
    });
return codigos;
}
console.log(generarCodigosMenu());

function agregarAlFinal(item: string): void {
    menuCafeteria.push(item);
}
agregarAlFinal("Café con leche");
agregarAlFinal("Chocolate caliente");

function agregarAlInicio(item: string): void {
    menuCafeteria.unshift(item)

}
agregarAlInicio("churros y cafe")

function insertarEnPosicion(indice: number, item: string): void {
menuCafeteria.splice(indice, 0, item)
}
insertarEnPosicion(2, "Tostadas con mermelada");

function actualizarProducto(nombreBuscado: string, nuevoNombre: string): void {

    const posicion = menuCafeteria.findIndex((producto) => {
 return producto.toLowerCase() === nombreBuscado.toLowerCase();
    });


if ( posicion === -1){
    console.log("producto no encontrado ")
}else{
    menuCafeteria.splice(posicion, 1, nuevoNombre);
}
}
actualizarProducto("Café Espresso Clásico", "Café Espresso Doble");
mostrarMenu();
console.log(menuCafeteria);

function eliminarUltimo(): void {
    const eliminado= menuCafeteria.pop()

    console.log("Producto eliminado:", eliminado);
}
eliminarUltimo();
mostrarMenu();

function eliminarPrimero(): void {
const eliminado = menuCafeteria.shift()
console.log("prod eliminado:", eliminado);
}
eliminarPrimero();
function eliminarPorNombre(nombreBuscado: string): void {

    const posicion = menuCafeteria.findIndex((producto) => {
         return producto.toLowerCase() === nombreBuscado.toLowerCase();

    });

    if (posicion === -1) {
        console.log("Producto no encontrado");
    } else {
         menuCafeteria.splice(posicion, 1,);
    }
}


function buscarPrimerMatch(termino: string): void {

   const encontrado = menuCafeteria.find((producto) => producto.includes(termino));
  if (encontrado!==undefined) {
    console.log("producto encontrado");
} else {
    console.log("producto no encontrado")
}
}

function filtrarPorCategoria(categoria: string): void {

    const resultado = menuCafeteria.filter((producto) =>
    producto.toLowerCase().includes(categoria.toLowerCase())
);
    console.log(resultado);
}
