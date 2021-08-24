# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


A continuacion relaciono el diseño de la app correspondiente al Clima:
* componente: WeatherCard.js
Este será un componente funcional y recibirá algunas propiedades que se mostraran.

* CitySelector
Crearemos un nuevo componente para que el usuario pueda seleccionar una ciudad y mostraremos los datos meteorológicos de esa ciudad.

En nuestro componente, crearemos una input y un botón. Cuando el usuario haga clic en el botón, obtendremos el pronóstico del tiempo para esa ciudad. Aqui implementaremos los Hooks state, estos ayudan a crear aplicaciones web de alto rendimiento. Para realizar un seguimiento de la lógica de nuestra aplicación, necesitamos usar state. Podemos reflejar cualquier IU o los cambios de la interfaz de usuario a través de cambios de estado.

Para poder cambiar el estado de nuestro botón, necesitamos un gancho especial llamado useState. Con useState, podemos agregar estado a componentes funcionales.

* UseFetch
Generalmente, en nuestros hooks personalizados, colocamos nuestra lógica como si pudiéramos poner nuestros ganchos useState y useEffect. Como puede ver, hemos importado el gancho useEffect de React y hemos definido algunas variables useState.

Para el gancho useEffect, hemos creado una función anónima. La parte más importante de nuestro gancho personalizado es la declaración de devolución. Aquí, devolvemos lo que queremos que otro componente tenga acceso. Podemos devolver una matriz o un objeto. Si devuelve una matriz, podemos nombrar los valores devueltos como queramos fuera del archivo. No es necesario que conservemos el mismo nombre que hemos vuelto.

* WeatherList

Este se pasara los props de weathers y lo pasamos de nuestro archivo App.js.
Para jsx, usamos componentes Row y Col de react-bootstrap.
Para crear columnas, mapeamos nuestra matriz meteorológica y llenamos 5 columnas una al lado de la otra mostrando datos meteorológicos durante 5 días consecutivos.
Cada columna contiene datos de fecha y hora, principales y meteorológicos de nuestra API.
Anida nuestro componente WeatherCard dentro del componente WeatherList y pasa sus valores de prop desde aquí.
Como puede notar, también pasamos la propiedad clave para nuestras tarjetas meteorológicas mapeadas. Si no pasamos una clave, React se quejará. Porque, cuando mapeamos una matriz, necesitamos un identificador como un id.

API Noticias

A continuacion realciono los componentes diseñados:
* weather:
Aqui hago usos de los Hooh: Use estate y useeffects