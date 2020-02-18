angular.module('designApp', [
  'ngMaterial',
  'ngRoute',
  'ngResource'
]).config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-firebrick')
    .accentPalette('Pink')
  .backgroundPalette ('Grey');
});
