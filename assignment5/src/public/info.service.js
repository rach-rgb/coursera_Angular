(function () {
"use strict";

angular.module('public')
.service('InfoService', InfoService);


InfoService.$inject = ['MenuService'];
function InfoService(MenuService) {
  var service = this;

  service.saveInfo = function(user) {
    service.user = user;
  }

  service.getInfo = function(){
    return service.user;
  }
}



})();
