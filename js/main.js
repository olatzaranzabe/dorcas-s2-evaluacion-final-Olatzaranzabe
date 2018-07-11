'use strict';

var searchButton = document.querySelector('.search-button');
var filmName = document.querySelector('.film-name');

fetch('http://api.tvmaze.com/search/shows?q=girls')
  .then(function(response){
    return response.text();
  })
  .then(function(html){
    document.body.innerHTML = html;
  });
