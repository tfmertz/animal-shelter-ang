Animal.factory('AnimalFactory', function AnimalFactory() {

  var factory = {};
  factory.animals = [];

factory.addAnimal = function() {
  var animal = { name: factory.animalName, type: factory.animalType, adopted: false };
  console.log(animal);
  factory.animals.push(animal);
  console.log(factory.animals);
  factory.animalName = null;
  factory.animalType = null;
};

factory.deleteAnimal = function(animal) {
  var index = factory.animals.indexOf(animal);
  factory.animals.splice(index, 1);
};

  return factory;
});
