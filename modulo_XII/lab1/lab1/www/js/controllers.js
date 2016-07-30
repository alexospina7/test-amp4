angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

$scope.Etiqueta=function(a,b){

localStorage.setItem("email",a);
localStorage.setItem("pass",b)
};
})
   
.controller('page2Ctrl', function($scope) {
$scope.c=localStorage.getItem("email");
$scope.d=localStorage.getItem("pass");
})
 