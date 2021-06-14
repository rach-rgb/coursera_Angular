(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

function SignUpController() {
  var $ctrl = this;

  $ctrl.submit = function(){
  	console.log($ctrl.user.firstName);
  	console.log($ctrl.user.lastName);
  	console.log($ctrl.user.email);
  	console.log($ctrl.user.phone);
  	console.log($ctrl.user.favMenu);
  }
}


})();
