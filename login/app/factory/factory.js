(function(){
  'use strict'

  angular
    .module('login')
    .factory('Auth',authService);

    function authService('$firebaseAuth') {
      var link = new Firebase('https://practica-731a6.firebaseio.com');
      return $firebaseAuth(link)
    }
})();
