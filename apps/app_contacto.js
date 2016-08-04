(function (){
  'use srict'

  var menu = {
    templateUrl:'apps/components/menu.html',
  }
  var debajo = {
    templateUrl:'apps/components/debajo.html',
  }
  angular
    .module('contacto',[])
    .component('menu',menu)
    .component('debajo',debajo);
})();
