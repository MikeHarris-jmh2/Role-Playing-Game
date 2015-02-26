rPG.controller('CharactersCtrl', function CharactersCtrl($scope, CharactersFactory) {
  $scope.characters = CharactersFactory.characters;
  $scope.CharactersFactory = CharactersFactory;
});
