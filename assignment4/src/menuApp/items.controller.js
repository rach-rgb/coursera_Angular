(function(){
'use strict';

angular.module("MenuApp")
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'cinfo'];
function ItemsController(MenuDataService,cinfo){
	var itemCtrl = this;

	itemCtrl.category_name = cinfo.category.name;
	itemCtrl.category_short = cinfo.category.short_name;
	itemCtrl.category_instruction = cinfo.category.special_instructions;
	itemCtrl.list = cinfo.menu_items;

	itemCtrl.hasDescription = function(){
		if((itemCtrl.category_instruction=="")||(itemCtrl.category_instruction==undefined)){
			return false;
		} else {
			return true;
		}
	};
}


})();