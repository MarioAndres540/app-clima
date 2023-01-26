secuencia de comandos para hacer git push

1) git add .
2) git commit -m "mensaje"
3) git push

*Tip:* Antes de empezar cualquier cambio, hacer ``git pull`` para traer los cambios que hayan en el remote del repositorio.

# Actividad para 19 de Enero

- Consulta: El modelo de caja, cómo funciona, y añadir ejemplos con lo que ya has construido en el app-clima.
- Según con lo consultado, eliminar el margin-top que está en el archivo main.css y añadir un espaciado interno al .main-container
- Consulta: cómo con css podemos gestionar el responsive design, Qué son los media queries, Cuales son las resoluciones más comunes para un aplicativo de 3 resoluciones (Mobile, Tablet, Desktop)
- Consulta: Por qué REM es mas usable que usar Pixeles como unidades de medida.
- Consulta:  qué es una peticiòn http y cómo funcionan las APIs. Luego de tener un material base, hacer una propuesta de cómo se va a actualizar la información del aplicativo usando una API. Pista: Cómo con una petición fetch podemos llamar data de una API.
- Consulta: Cuales son los métodos mas comunes de DOM manipulation con Javascript.

![Resonsabilidad](Diseños/responsabilidad.webp)

# Actividad para el 26 de enero

-Consulta: Segun lo averiguado de manipulacion del DOM, consultar como pintar los datos de una API, en los elementos del html ok
-Consulta: Como guardar un aAPI Key en una variable de entorno, y porque es mas seguro? ok
-Consulta: Ques es GITIGNORE y como nos ayuda prevenir publicar datos sensibles (ED) ok
-Consulta: Que es asincronismo en Js y que diferente metodos existen. ok
-Consulta: que es callback help? ok
-Consulta: Que es hoinsting, event bubbling,scope,prototype,use strict ok

Ejercicios: Tratar de pintar una ciudad con la data real de la API = pendiente
Ejercicio: hacer un mobil media-query se renderice una card por linea y tablet de a dos, y en desktop 3, ok
Ejercicio: iniciar NPM en repositorio. ok

@media (min-width: 400px) and (max-width: 599px){
    .left-sidebar {
        grid-template-areas: 
        "aside"
        "main "
        "footer";
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    }
}

@media (min-width: 400px) and (max-width: 768px){
    .weather-section {
        grid-template-columns: repeat(1,1fr);
    }
}

@media (min-width:769px) and (max-width:1024px){
    .weather-section {
        grid-template-columns: repeat(2,1fr);
    }
}

@media (min-width:1025px) and (max-width:1200px){
    .weather-section {
        grid-template-columns: repeat(3,1fr);
    }
}