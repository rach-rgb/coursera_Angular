(function(){
'use strict';

angular.module("MenuApp")
.component('itemsComponent', {
	templateUrl: 'src/menuApp/templates/items.component.template.html',
	bindings: {
		list: '<'
	}
});

})();