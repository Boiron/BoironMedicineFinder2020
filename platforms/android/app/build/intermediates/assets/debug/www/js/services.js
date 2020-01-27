angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('TubeService', [function($scope, $stateParams){
    $scope.tubeItem = {
        'id': '1',
        'img': "img/SingleMedicines.jpg"
    }
}]);

