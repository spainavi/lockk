(function(){
  'use strict'

  var menu = {
    templateUrl:'apps/components/menu.html',
  }
  var debajo = {
    templateUrl:'apps/components/debajo.html',
  }

  angular
    .module('como',[])
    .component('menu',menu)
    .component('debajo',debajo);
})();
