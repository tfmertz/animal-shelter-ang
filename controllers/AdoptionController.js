Animal.controller('AdoptionCtrl', function AdoptionCtrl($scope, AnimalFactory) {
    $scope.animals = AnimalFactory.animals;
    $scope.adopt = function(animal) {
      animal.adopted = true;
    };

    $scope.abandon = function(animal) {
      animal.adopted = false;
    }
});
