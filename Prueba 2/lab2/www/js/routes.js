angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.fotoYVideo', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/fotoYVideo.html',
        controller: 'fotoYVideoCtrl'
      }
    }
  })

  .state('tabsController.redesSociales', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/redesSociales.html',
        controller: 'redesSocialesCtrl'
      }
    }
  })

  .state('tabsController.juegos', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/juegos.html',
        controller: 'juegosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.mSica', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/mSica.html',
        controller: 'mSicaCtrl'
      }
    }
  })

  .state('tabsController.educaciN', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/educaciN.html',
        controller: 'educaciNCtrl'
      }
    }
  })

  .state('tabsController.deportes', {
    url: '/page7',
    views: {
      'tab6': {
        templateUrl: 'templates/deportes.html',
        controller: 'deportesCtrl'
      }
    }
  })

  .state('tabsController.compras', {
    url: '/page8',
    views: {
      'tab7': {
        templateUrl: 'templates/compras.html',
        controller: 'comprasCtrl'
      }
    }
  })

  .state('tabsController.navegaciN', {
    url: '/page9',
    views: {
      'tab8': {
        templateUrl: 'templates/navegaciN.html',
        controller: 'navegaciNCtrl'
      }
    }
  })

  .state('tabsController.utilidades', {
    url: '/page10',
    views: {
      'tab9': {
        templateUrl: 'templates/utilidades.html',
        controller: 'utilidadesCtrl'
      }
    }
  })

  .state('tabsController.taxis', {
    url: '/page11',
    views: {
      'tab10': {
        templateUrl: 'templates/taxis.html',
        controller: 'taxisCtrl'
      }
    }
  })

  .state('tabsController.pokemonGo', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/pokemonGo.html',
        controller: 'pokemonGoCtrl'
      }
    }
  })

  .state('tabsController.bitmoji', {
    url: '/page13',
    views: {
      'tab9': {
        templateUrl: 'templates/bitmoji.html',
        controller: 'bitmojiCtrl'
      }
    }
  })

  .state('tabsController.iTunesU', {
    url: '/page14',
    views: {
      'tab5': {
        templateUrl: 'templates/iTunesU.html',
        controller: 'iTunesUCtrl'
      }
    }
  })

  .state('tabsController.nBCSports', {
    url: '/page15',
    views: {
      'tab6': {
        templateUrl: 'templates/nBCSports.html',
        controller: 'nBCSportsCtrl'
      }
    }
  })

  .state('tabsController.snapchat', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/snapchat.html',
        controller: 'snapchatCtrl'
      }
    }
  })

  .state('tabsController.messeger', {
    url: '/page17',
    views: {
      'tab2': {
        templateUrl: 'templates/messeger.html',
        controller: 'messegerCtrl'
      }
    }
  })

  .state('tabsController.instagram', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/instagram.html',
        controller: 'instagramCtrl'
      }
    }
  })

  .state('tabsController.youtube', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/youtube.html',
        controller: 'youtubeCtrl'
      }
    }
  })

  .state('tabsController.mercari', {
    url: '/page20',
    views: {
      'tab7': {
        templateUrl: 'templates/mercari.html',
        controller: 'mercariCtrl'
      }
    }
  })

  .state('tabsController.facebook', {
    url: '/page21',
    views: {
      'tab2': {
        templateUrl: 'templates/facebook.html',
        controller: 'facebookCtrl'
      }
    }
  })

  .state('tabsController.googleMaps', {
    url: '/page22',
    views: {
      'tab8': {
        templateUrl: 'templates/googleMaps.html',
        controller: 'googleMapsCtrl'
      }
    }
  })

  .state('tabsController.goRadar', {
    url: '/page23',
    views: {
      'tab9': {
        templateUrl: 'templates/goRadar.html',
        controller: 'goRadarCtrl'
      }
    }
  })

  .state('tabsController.googlePhotos', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/googlePhotos.html',
        controller: 'googlePhotosCtrl'
      }
    }
  })

  .state('tabsController.fitTheFat2', {
    url: '/page25',
    views: {
      'tab3': {
        templateUrl: 'templates/fitTheFat2.html',
        controller: 'fitTheFat2Ctrl'
      }
    }
  })

  .state('tabsController.uber', {
    url: '/page26',
    views: {
      'tab10': {
        templateUrl: 'templates/uber.html',
        controller: 'uberCtrl'
      }
    }
  })

  .state('tabsController.safeClassroomComunication', {
    url: '/page27',
    views: {
      'tab5': {
        templateUrl: 'templates/safeClassroomComunication.html',
        controller: 'safeClassroomComunicationCtrl'
      }
    }
  })

  .state('tabsController.color6', {
    url: '/page28',
    views: {
      'tab3': {
        templateUrl: 'templates/color6.html',
        controller: 'color6Ctrl'
      }
    }
  })

  .state('tabsController.pandora', {
    url: '/page29',
    views: {
      'tab4': {
        templateUrl: 'templates/pandora.html',
        controller: 'pandoraCtrl'
      }
    }
  })

  .state('tabsController.spotify', {
    url: '/page30',
    views: {
      'tab4': {
        templateUrl: 'templates/spotify.html',
        controller: 'spotifyCtrl'
      }
    }
  })

  .state('tabsController.hocus', {
    url: '/page31',
    views: {
      'tab3': {
        templateUrl: 'templates/hocus.html',
        controller: 'hocusCtrl'
      }
    }
  })

  .state('conexiN', {
    url: '/page32',
    templateUrl: 'templates/conexiN.html',
    controller: 'conexiNCtrl'
  })

  .state('iniciarSesiN', {
    url: '/page33',
    templateUrl: 'templates/iniciarSesiN.html',
    controller: 'iniciarSesiNCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});