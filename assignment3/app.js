(function(){

var app = angular.module('NarrowItDownApp', [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.constant("ApiBasePath", "https://davids-restaurant.herokuapp.com/")
.directive("foundItems", FoundItems);

// directive constructor
function FoundItems(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
    },
  };

  return ddo;
};

// controller
NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.query = "";
  ctrl.found = [];

  ctrl.searchItems = function(query){
    ctrl.found = MenuSearchService.getMatchedMenuItems(query);
  };

  ctrl.removeItem = function(itemIndex){
    ctrl.found.splice(itemIndex);
  }

};

// service
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
  var service = this;

  var getMenuItems = function(){
    var response = $http({
      url: ApiBasePath + "/menu_items.json"
    });

    return response; // returns promise
  };

  service.getMatchedMenuItems = function(searchTerm) {
    var promise = getMenuItems()
    var foundItems = [] // selected items

    // if http reception is successful
    promise.then(function(response){
      var entireItems = response.data.menu_items;

      for (var i = 0; i < entireItems.length; i++) {
        if(entireItems[i].description.includes(searchTerm)){
          foundItems.push(entireItems[i]);
        }
      };
    });

    return foundItems;
  };
}


})();