(function(){
'use strict';

angular.module("MenuApp")
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'ulist'];
function CategoriesController(MenuDataService, ulist){
	var catCtrl = this;

	catCtrl.list = ulist;
}


})();