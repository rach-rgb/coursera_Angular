(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'InfoService'];
function SignUpController(MenuService, InfoService) {
  var $ctrl = this;
  $ctrl.error = false;
  $ctrl.save = false;

  $ctrl.submit = function(){
	MenuService.getMenu($ctrl.user.favMenu)
	.then(function(response){
		$ctrl.error = false;
		$ctrl.save = true;
		InfoService.saveInfo($ctrl.user);
	}, function(error){
		$ctrl.error = true;
	});
  }
}

})();
