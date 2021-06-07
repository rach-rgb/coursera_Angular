(function(){
'use strict';

angular.module("MenuApp")
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider

	// Home Page
	.state('home', {
		url: '/',
		templateUrl: 'src/menuApp/templates/home.template.html'
	})


	// Categories Page 
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/menuApp/templates/categories.template.html',
		controller: "CategoriesController as catCtrl",

		resolve: {
			ulist: ['MenuDataService', function(MenuDataService){
				return MenuDataService.getAllCategories()
				.then(function(response){
					return response.data;
				}, function(error){
					console.log("ERROR");
				});
			}]
		}
	})

	.state('items', {
		url: '/items/{catId}',
		templateUrl: 'src/menuApp/templates/items.template.html',
		controller: "ItemsController as itemCtrl",

		resolve: {
			cinfo: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
				return MenuDataService.getAllCategories()
				.then(function(response){
					var categories_list = response.data;

					return MenuDataService.getItemsForCategories(categories_list[$stateParams.catId].short_name)
					.then(function(response){
						return response.data;
					})
				}, function(error){
					console.log("resolve error");
				});
			}]
		}
	});
}

})();