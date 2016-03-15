(function() {
  'use strict';
  angular.module('snwMap', ['snwMap.gmap', 'snwMap.exerciseOne', 'snwMap.exerciseTwo', 'snwMap.exerciseThree'
    ])
    .config(function(GoogleMapApiProvider) {
      GoogleMapApiProvider.configure({
        language: 'es',
        libraries: ['places'],
        key: 'AIzaSyBKCEd76B2SqkshKlpdOlhIqE8xLyQxIbU'
      });
    });
})();

