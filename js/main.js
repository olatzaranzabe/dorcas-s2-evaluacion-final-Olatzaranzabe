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
      // metiendo li's en la ul
        filmsList.appendChild(newFilm);

console.log(newFilm);
        var ourNewFilm = json[i];
        newFilm.append(ourNewFilm);
        console.log(ourNewFilm);
      // img.src = json.message;
        document.body.innerHTML += newFilm;}
    });
}

  searchButton.addEventListener('click', showFilm);
