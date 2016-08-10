(function (){
  'use srict'

  var menu = {
    templateUrl:'apps/components/menu.html',
  }
  var main = {
    templateUrl:'apps/components/main_contacto.html',
  }
  var debajo = {
    templateUrl:'apps/components/debajo.html',
  }
  angular
    .module('contacto',[])
    .component('menu',menu)
    .component('main',main)
    .component('debajo',debajo);
})();
