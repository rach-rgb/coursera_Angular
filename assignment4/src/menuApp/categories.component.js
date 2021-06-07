(function(){
'use strict';

angular.module("MenuApp")
.component("categoriesComponent", {
	templateUrl: 'src/menuApp/templates/categories.component.template.html',
	bindings : {
		list: '<'
	}
});

})();