rPG.controller('DescriptionCtrl', function DescriptionCtrl($scope, CharacterFactory, UtilitiesFactory){
  // $scope.factory = UtilitiesFactory.findById(CharacterFactory, $stateParams.characterId)
  $scope.addDescription = function() {
    $scope.desc.push({gender: $scope.characterGender,
    race: $scope.characterRace, health: $scope.characterHealth});
    $scope.characterGender = null;
    $scope.characterRace = null;
  }
});
