# Mateo Molina - Test Mercado Pago - Front End #

## General ##

El proyecto fue desarrollado en React, utilizando algunas de sus funcionalidades como el React Router, Hooks, etc.

Los estilos fueron aplicados con SASS, instalando el modulo node-sass.

La aplicación se separa en dos grandes pantallas, la sección de busqueda (que es manejada a grades rasgos por el componente
Layout y sus subsecuentes componentes hijos) y la seccion de detalle de producto (ItemDetail).

Para manejar situaciones de errores cree el componente Toaster, para darle un mensaje al usuario cuando ocurre algun error o 
alguna busqueda no da resultados.

El servidor de la aplicación fue desarrollado con Express(NodeJs)

## Setup ##

Tras haber abierto la carpeta del proyecto en un IDE, instalar dependencias:

```
npm install
```

Para que la aplicación levante:

```
npm run all
```

(Esto corre tanto la aplicación React como el servicor de Express)

https://github.com/MatMol