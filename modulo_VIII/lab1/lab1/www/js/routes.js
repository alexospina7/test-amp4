angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('opciones', {
    url: '/page2',
    templateUrl: 'templates/opciones.html',
    controller: 'opcionesCtrl'
  })

  .state('login', {
    url: '/page3',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page4',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('cambiarContraseA', {
    url: '/page5',
    templateUrl: 'templates/cambiarContraseA.html',
    controller: 'cambiarContraseACtrl'
  })

  .state('detailHotel', {
    url: '/page6',
    templateUrl: 'templates/detailHotel.html',
    controller: 'detailHotelCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});