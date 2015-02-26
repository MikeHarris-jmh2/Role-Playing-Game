rPG.controller('CharactersCtrl', function CharactersCtrl($scope, CharacterFactory) {
  $scope.factory = CharacterFactory.factory;
  $scope.CharacterFactory = CharacterFactory;
  $scope.addCharacter = function() {
    $scope.push({name: characterName, desc: [] })
  }

  $scope.addCompass = function() {
    $scope.push({compass: true});
  }
});
