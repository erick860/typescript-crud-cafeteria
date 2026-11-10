# Menú de Cafetería

Proyecto de práctica en TypeScript para administrar un menú de cafetería desde la consola. Incluye cafés, tés, pastelería, sándwiches y bebidas.

## Funcionalidades

- Mostrar los productos del menú con su número.
- Generar códigos para los productos con el formato `CAF-101`.
- Agregar productos al final o al inicio del menú.
- Insertar un producto en una posición indicada.
- Buscar y actualizar un producto por nombre (sin distinguir mayúsculas y minúsculas).

La actualización requiere que el nombre completo del producto coincida.

Al ejecutar el programa, se realizan algunos ejemplos de estas operaciones y se imprime el menú resultante en la consola.

## Requisitos

- [Node.js](https://nodejs.org/)
- npm

## Cómo ejecutar

Desde la carpeta del proyecto, inicializa npm, instala TypeScript como dependencia de desarrollo y compila el archivo:

```bash
npm init -y
npm install --save-dev typescript
npx tsc app.ts
node app.js
```

La compilación genera `app.js`, que luego se ejecuta con Node.js.

## Estructura

```text
.
├── app.ts
└── README.md
```

## Tecnologías

- TypeScript
- Node.js