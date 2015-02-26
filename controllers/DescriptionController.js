rPG.controller('DescriptionCtrl', function DescriptionCtrl($scope, CharacterFactory, UtilitiesFactory){
  // $scope.factory = UtilitiesFactory.findById(CharacterFactory, $stateParams.characterId)
  $scope.addDescription = function() {
    $scope.character.gender = $scope.gender;
    $scope.character.race = $scope.race;
    $scope.characterGender = null;
    $scope.characterRace = null;
  }
});
