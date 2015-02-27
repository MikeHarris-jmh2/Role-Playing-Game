rPG.controller('CharactersCtrl', function CharactersCtrl($scope, CharacterFactory) {
  $scope.character = CharacterFactory.character;
  $scope.CharacterFactory = CharacterFactory;
  $scope.addCharacter = function() {
    $scope.character.name = $scope.name;
  }

  $scope.addCompass = function() {
    $scope.character.compass = true;
  }

  $scope.isDead = function() {
    if ($scope.character.hp = 0);
      $scope.character.hp = "you're dead";
  }

  $scope.addKey = function() {
    var string = $scope.key;
    var lowString = string.toLowerCase()

    if (lowString === "glass") {
      $scope.character.key = true;
    }
  };

  $scope.addQuestion = function() {
    var string = $scope.question;
    var lowString = string.toLowerCase()

     if (lowString === "nothing") {
       $scope.character.question = true;
     }
  };


  $scope.addCandle = function() {
    var string = $scope.candle;
    var lowerString = string.toLowerCase()
      if (lowerString === "light candle") {
        $scope.character.candle = true;
      } else if (lowerString !== "light candle") {
        $scope.character.hp -= 10;
      }
    };
});
