'use strict';

var searchButton = document.querySelector('.search-button');
var filmName = document.querySelector('.film-name');
var newFilm;

var filmsList = document.querySelector('.films-list');
function  showFilm(){
  filmsList.innerHTML='';
  fetch ('http://api.tvmaze.com/search/people?q=' +filmName.value)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for(var i = 0; i < json.length; i++){
      // creando li's
        newFilm = document.createElement('li');
        newFilm.classList.add('listElement');

        // favoriteando (des/seleccion)
        newFilm.addEventListener('click', paintColor);

        // metiendo li's en la ul
        filmsList.appendChild(newFilm);

        var ourFilmImage = json[i].person.image;
        if(ourFilmImage!==null){
          ourFilmImage = json[i].person.image.medium;
        } else {
          ourFilmImage = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        }
        var ourFilmName = json[i].person.name;

        // creando etiqueta img
        var image= document.createElement('img');
        image.classList.add('filmCover');
        newFilm.appendChild(image);
        image.setAttribute('src', ourFilmImage);
        // creando etiqueta h2
        var filmTitle = document.createElement('h2');
        filmTitle.classList.add('filmTitle');
        newFilm.appendChild(filmTitle);
        filmTitle.innerHTML = ourFilmName;
      }
    });
}

function paintColor(e) {
  var selectedFilm = e.currentTarget;
  if (selectedFilm.classList.contains('colouring')===true){
    selectedFilm.classList.remove('colouring');
  } else{
    selectedFilm.classList.add('colouring');
  }
}
searchButton.addEventListener('click', showFilm);

var buttonName = document.querySelector('.button-name');
var personName = document.querySelector('.person-name');
console.dir(personName);
var welcomeMessage = document.querySelector('.welcome-message');

function giveWelcome() {
  welcomeMessage.innerHTML+='Bienvenida ' + personName.value;


}

buttonName.addEventListener('click', giveWelcome);
