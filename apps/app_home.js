(function(){
  'use strict'

  var menu ={
    templateUrl:'apps/components/menu.html',
  }
  var botones = {
    templateUrl:'apps/components/botones.html',
  }
  var debajo = {
    templateUrl:'apps/components/debajo.html',
  }

  angular
    .module('home',[])
    .component ('menu', menu)
    .component ('botones', botones)
    .component ('debajo', debajo);
})();
