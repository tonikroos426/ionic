// Ionic Starter App
angular.module('Lunona', ['ionic','ngCordova','pascalprecht.translate', 'welcome.controller','nav.controller','password.controller','password1.controller','country.controller','selectlaunguage.controller','login.controller','username.controller','register.controller','gender.controller','displayname.controller','city.controller','birthdate.controller','finish.controller' ])

.config(function($stateProvider, $urlRouterProvider, $translateProvider, $ionicConfigProvider) {
     for(lang in translations){
          $translateProvider.translations(lang, translations[lang]);
      }
     $translateProvider.preferredLanguage("EN");
     $translateProvider.fallbackLanguage("EN");


 })


.run(function($ionicPlatform, $rootScope, $translate, $location) {

  $ionicPlatform.ready(function() {

    $ionicPlatform.registerBackButtonAction(function () {
        var hashvalue = $location.url();
        if(hashvalue=="/welcome" || hashvalue=="/register"){
            navigator.app.exitApp();
        } else {
            navigator.app.backHistory();
        }
    }, 100);


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

  });
})
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  } 
}])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('welcome', {
    cache:false,
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })
  .state('nav', {
    cache:false,
    url: '/nav',
    templateUrl: 'templates/nav.html',
    controller: 'navCtrl'
  })
  .state('password', {
    cache:false,
    url: '/password',
    templateUrl: 'templates/password.html',
    controller: 'passwordCtrl'
  })
  .state('password1', {
    cache:false,
    url: '/password1',
    templateUrl: 'templates/password1.html',
    controller: 'password1Ctrl'
  })
  .state('selectlaunguage', {
    cache:false,
    url: '/selectlaunguage',
    templateUrl: 'templates/selectlaunguage.html',
    controller: 'selectlaunguageCtrl'
  })
  .state('username', {
    cache:false,
    url: '/username',
    templateUrl: 'templates/username.html',
    controller: 'usernameCtrl'
  })
  .state('login', {
    url: '/login',
    cache:false,
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/register',
    cache:false,
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })
  .state('country', {
    url: '/country',
    cache:false,
    templateUrl: 'templates/country.html',
    controller: 'countryCtrl'
  })
  .state('gender', {
    url: '/gender',
    cache:false,
    templateUrl: 'templates/gender.html',
    controller: 'genderCtrl'
  })

  .state('displayname', {
    url: '/displayname',
    cache:false,
    templateUrl: 'templates/displayname.html',
    controller: 'displaynameCtrl'
  })

  .state('city', {
    url: '/city',
    cache:false,
    templateUrl: 'templates/city.html',
    controller: 'cityCtrl'
  })
  .state('birthdate', {
    url: '/birthdate',
    cache:false,
    templateUrl: 'templates/birthdate.html',
    controller: 'birthdateCtrl'
  })

  .state('finish', {
    url: '/finish',
    cache:false,
    templateUrl: 'templates/finish.html',
    controller: 'finishCtrl'
  })
  ;

  var isLogin = localStorage.getItem('isLogin');
  var isRemember = localStorage.getItem('isRemember');
  if(isRemember==true || isRemember=="true"){
    if(isLogin=="1" || isLogin==1){
      $urlRouterProvider.otherwise('/username');
    }
  }else{
    $urlRouterProvider.otherwise('/welcome');
  }
  
});
