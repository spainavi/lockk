(function(){
  'use strict'
  var register = {
    templateUrl: 'app/components/register/register.html',
    controller:registerCtrl,
  }

  function registerCtrl(Auth,$location) {
    var reg = this;
    reg.register = function () {
      Auth.$createUser({
        email:reg.email,
        password:reg.password
      }).then (function (userData){
        console.log('user created whit uid',userData)
        $location.path('/')
      }).catch (function(error){
        console.console.log(error)
      })
    }
  }

  angular
    .module('login')
    .component('register',register);
})();
