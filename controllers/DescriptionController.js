rPG.controller('DescriptionCtrl', function DescriptionCtrl($scope, $stateParams, CharactersFactory, UtilitiesFactory){
  $scope.character = UtilitiesFactory.findById(CharactersFactory.characters, $stateParams.characterId)
  $scope.addDescription = function() {
    $scope.character.desc.push({gender: $scope.characterGender,
    race: $scope.characterRace, health: $scope.characterHealth});
    $scope.characterGender = null;
    $scope.characterRace = null;
  }
});
