'use strict';

var wistiaUploaderApp = angular.module('wistiaUploaderApp', ['ngRoute', 'blueimp.fileupload']);

wistiaUploaderApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
      }).otherwise({
        redirectTo: '/',
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl',
        caseInsensitiveMatch: true
      })
  }]);