rPG.controller('CharactersCtrl', function CharactersCtrl($scope, CharacterFactory) {
  $scope.character = CharacterFactory.character;
  $scope.CharacterFactory = CharacterFactory;
  $scope.addCharacter = function() {
    $scope.character.name = $scope.name;
  }

  $scope.addCompass = function() {
    $scope.character.compass = true;
  }

  $scope.addKey = function() {
    $scope.character.key = true;
  }

  $scope.addCandle = function() {
    var string = $scope.candle;
    var lowerString = string.toLowerCase()
      if (lowerString === "light candle") {
        $scope.character.candle = true;
      } else if (lowerString !== "light candle") {
        return "You died"
      }
    };
});
