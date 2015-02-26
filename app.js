var rPG = angular.module('rPG', ['ui.router']);

rPG.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('characters', {
    url: "/characters",
    templateUrl: "partials/characters.html",
    controller: 'CharactersCtrl'
  });

  $stateProvider.state('characters.description', {
    url: "/:characterId",
    templateUrl: "partials/characters.description.html",
    controller: 'DescriptionCtrl'
  });
});
