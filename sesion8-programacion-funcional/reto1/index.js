const movies = [
    {
        id: 1300,
        titulo: "avengers: Endgame",
        actores: ["Robert Downey Jr.", "Chris Evans", "Tom Holland"],
        descripcion: "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
        fechaDeLanzamiento: "2019-4-26"
    },
    {
        id: 1301,
        titulo: "aquarela",
        actores: ["Hayat Mokhenache", "Peter Madej"],
        descripcion: "Aquarela lleva a la audiencia a una profunda aventura cinemática sobre la poderosa y transformadora belleza del agua.",
        fechaDeLanzamiento: "2018-12-12"
    },
    {
        id: 1302,
        titulo: "frozen II",
        actores: ["Kristen Bell", "Idina Menzel", "Jonathan Groff", "Josh Gad"],
        descripcion: "La reina Elsa, su hermana Anna, Kristoff, Olaf y Sven se embarcan en un nuevo viaje al interior del bosque para descubrir la verdad sobre un antiguo misterio de su reino.s",
        fechaDeLanzamiento: "2019-11-15 "
    },
    {
        id: 1303,
        titulo: "spiderman: Far from home",
        actores: ["Tom Holland", "Zendaya", "Jake Gyllenhaal"],
        descripcion: "Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.",
        fechaDeLanzamiento: "2020-7-5"
    }
];

const upperCaseTitles = (moviesArr) => {
    return moviesArr.map(e => {
        e.titulo = e.titulo.toUpperCase();
        return e
    })
}

const maxDateMovie = (moviesArr) => {
    let mostRecentMovie = movies[0]
    moviesArr.map(e => {
        if(new Date(e.fechaDeLanzamiento) > new Date(mostRecentMovie.fechaDeLanzamiento)){
            mostRecentMovie = e
        }
    })
    return mostRecentMovie;
}

console.log(maxDateMovie(movies))