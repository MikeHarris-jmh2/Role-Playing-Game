var rPG = angular.module('rPG', ['ui.router']);

rPG.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('character', {
    url: "/character",
    templateUrl: "partials/character.html",
    controller: 'CharactersCtrl'
  });

  $stateProvider.state('character.description', {
    url: "/character.description",
    templateUrl: "partials/character.description.html",
    controller: 'DescriptionCtrl'
  });

  $stateProvider.state('worlds1', {
    url: "/worlds1",
    templateUrl: "partials/worlds1.html",
    // controller: 'WorldsCtrl'
  });

  $stateProvider.state('worlds2', {
    url: "/worlds2",
    templateUrl: "partials/worlds2.html",
    // controller: 'WorldsCtrl'
  });

  $stateProvider.state('worlds3', {
    url: "/worlds3",
    templateUrl: "partials/worlds3.html",
    // controller: 'WorldsCtrl'
  });
  $stateProvider.state('worlds4', {
    url: "/worlds4",
    templateUrl: "partials/worlds4.html",
    // controller: 'WorldsCtrl'
  });
  $stateProvider.state('worlds5', {
    url: "/worlds5",
    templateUrl: "partials/worlds5.html",
    // controller: 'WorldsCtrl'
  });
  $stateProvider.state('worlds6', {
    url: "/worlds6",
    templateUrl: "partials/worlds6.html",
    // controller: 'WorldsCtrl'
  });
  $stateProvider.state('worlds7', {
    url: "/worlds7",
    templateUrl: "partials/worlds7.html",
    // controller: 'WorldsCtrl'
  });
});
