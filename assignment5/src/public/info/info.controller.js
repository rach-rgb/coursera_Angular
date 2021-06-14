(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['InfoService', 'MenuService', 'ApiPath'];
function InfoController(InfoService, MenuService, ApiPath) {
  var $ctrl = this;

  $ctrl.user = InfoService.getInfo();
  $ctrl.basePath = ApiPath;

  if($ctrl.user){
  	$ctrl.name = MenuService.getMenu($ctrl.user.favMenu);
  }
}

})();
