'use strict';

var searchButton = document.querySelector('.search-button');
var filmName = document.querySelector('.film-name');
var newFilm;

var filmsList = document.querySelector('.films-list');
function  showFilm(){
  fetch('http://api.tvmaze.com/search/shows?q=' +filmName.value)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for(var i = 0; i < json.length; i++){
      // creando li's
        newFilm = document.createElement('li');
        newFilm.classList.add('listElement');
      // metiendo li's en la ul
        filmsList.appendChild(newFilm);

        var ourFilmImage = json[i].show.image.medium;
        var ourFilmName = json[i].show.name;
        console.log(json[i].show.name);

      // creando etiqueta img
        var image= document.createElement('img');
        newFilm.appendChild(image);
        image.setAttribute('src', ourFilmImage);
      // creando etiqueta h2
      var filmTitle = document.createElement('h2');
      // newFilm.appendChild(filmTile);
        // newFilm.append(ourNewFilm);
      // metiendo image and name en cada li
    }
    });
}

  searchButton.addEventListener('click', showFilm);
