angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $stateParams){
  //console.log($stateParams);
$scope.booked = mainSrv.getLocation($stateParams.id);

$scope.goToPackagesState = function(){
//  $state.go("booked");
}

});
