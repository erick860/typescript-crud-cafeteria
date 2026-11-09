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