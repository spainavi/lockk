(function(){
  'use strict'

  var menu = {
    templateUrl: 'apps/components/menu.html',
  }
  var debajo = {
    templateUrl: 'apps/components/debajo.html',
  }
  var slider = {
    controller:sliderCtrl,
    templateUrl: 'apps/components/slider.html'
  }
  function sliderCtrl(){
    var slider = this;
    $('.slider').slider({full_width: true});

  }


  angular
    .module('somos',[])
    .component('menu',menu)
    .component('debajo',debajo)
    .component('slider',slider);
})();
