(function(){
  'use strict'

  var menu = {
    templateUrl:'apps/components/menu.html',
  }
  var main = {
    templateUrl:'apps/components/main_como.html',
  }
  var debajo = {
    templateUrl:'apps/components/debajo.html',
  }

  angular
    .module('como',[])
    .component('menu',menu)
    .component('main',main)
    .component('debajo',debajo);
})();
