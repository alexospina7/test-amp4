angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams','$cordovaNetwork', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope,$cordovaNetwork) {

$scope.clickOnline=function(){

	$scope.type=$cordovaNetwork.getNetwork();
	$scope.isonline=$cordovaNetwork.isOnline();
	$scope.isoffline=$cordovaNetwork.isOffline();


}
}])
 