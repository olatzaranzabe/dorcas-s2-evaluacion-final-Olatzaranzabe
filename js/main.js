'use strict';

var searchButton = document.querySelector('.search-button');
var filmName = document.querySelector('.film-name');
var newFilm;

var filmsList = document.querySelector('.films-list');
function  showFilm(){
  filmsList.innerHTML='';
  fetch('http://api.tvmaze.com/search/shows?q=' +filmName.value)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for(var i = 0; i < json.length; i++){
      // creando li's
        newFilm = document.createElement('li');
        newFilm.classList.add('listElement');

        // favoriteando
        newFilm.addEventListener('click', paintColor);

        function paintColor(e){
          var selectedFilm = e.currentTarget;
          console.log(e.currentTarget);
          selectedFilm.classList.add('colouring');

        }
        // metiendo li's en la ul
        filmsList.appendChild(newFilm);

        var ourFilmImage = json[i].show.image;
        console.log(json[i].show.image);
        if(ourFilmImage!==null){
          ourFilmImage = json[i].show.image.medium;
        } else {
          ourFilmImage = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV'
        }
        var ourFilmName = json[i].show.name;
        console.log(json[i].show.name);

        // creando etiqueta img
        var image= document.createElement('img');
        newFilm.appendChild(image);
        image.setAttribute('src', ourFilmImage);
        // creando etiqueta h2
        var filmTitle = document.createElement('h2');
        newFilm.appendChild(filmTitle);
        filmTitle.innerHTML = ourFilmName;

        // newFilm.append(ourNewFilm);
      // metiendo image and name en cada li
      }
    });
}

searchButton.addEventListener('click', showFilm);
