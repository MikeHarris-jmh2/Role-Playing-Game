rPG.factory('CharactersFactory', function CharactersFactory(){
  var factory = {};
  factory.characters = [];
  factory.addCharacter = function() {
    factory.characters.push({name: factory.characterName, id: factory.characters.length + 1, desc: []});

    factory.characterName = null;
  };

  return factory
})
