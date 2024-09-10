function ingresarPeliculas() {
    let peliculas = [];
    let continuar = true;

    while (continuar === true) {
        const titulo = prompt("¡Califica tus películas! Ingresá el título de una película.");
        const calificacion = parseFloat(prompt("Ingresá tu calificación de la película del 0 al 10."));

        if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
            alert("Ingresá una calificación válida entre 0 y 10.");
        } else {
            peliculas.push({titulo: titulo, calificacion: calificacion});
        }

        const respuesta = prompt("¿Deseas agregar otro título? Si/No").toLowerCase();
        if (respuesta === "si") {
            continuar = true;
        } else {
            continuar = false;
        }
    }

    return peliculas;
}


function calcularPromedio(peliculas) {
    const suma = peliculas.reduce((acc, pelicula) => acc + pelicula.calificacion, 0);
    const promedio = suma / peliculas.length;
    return promedio;
}


function mejoresPeliculas(peliculas) {
    let mejorCalificacion = peliculas[0].calificacion;
    let mejores = [];


    for (let i = 1; i < peliculas.length; i++) {
        if (peliculas[i].calificacion > mejorCalificacion) {
            mejorCalificacion = peliculas[i].calificacion;
        }
    }


    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].calificacion === mejorCalificacion) {
            mejores.push(peliculas[i]);
        }
    }

    return mejores;
}


function elegirPeliculaAlAzar(peliculas) {
    const randomIndex = Math.floor(Math.random() * peliculas.length);
    return peliculas[randomIndex];
}


function mostrarPeliculasYElegirUna(peliculas) {
    console.log(" Las mejores películas ");
    const mejores = mejoresPeliculas(peliculas);


    for (let i = 0; i < mejores.length; i++) {
        console.log(mejores[i].titulo + " con calificación de " + mejores[i].calificacion);
    }

    const respuesta = prompt("¿No sabes cúal ver? ¿Te gustaría que elija una de las películas al azar? Si/No").toLowerCase();
    if (respuesta === "si") {
        const peliculaAlAzar = elegirPeliculaAlAzar(peliculas);
        console.log(" Película elegida al azar ");
        console.log(peliculaAlAzar.titulo + " con calificación de " + peliculaAlAzar.calificacion);
    }
}

function sistemaDePeliculas() {
    const peliculas = ingresarPeliculas();

    if (peliculas.length === 0) {
        console.log("No hay películas");
        return;
    }

    const promedio = calcularPromedio(peliculas);

    console.log(" Promedio de calificaciones ");
    console.log(promedio.toFixed(2));

    mostrarPeliculasYElegirUna(peliculas);
}

sistemaDePeliculas();