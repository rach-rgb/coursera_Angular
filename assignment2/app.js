(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var BuyCtrl = this;


  BuyCtrl.items = ShoppingListCheckOffService.getBuyList();

  BuyCtrl.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buy(itemIndex);

    if(BuyCtrl.items.length==0)
    {
      BuyCtrl.empty = true;
    }
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var BoughtCtrl = this;

  BoughtCtrl.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService(){
  var service = this;

  var buyList = [{name: "cookies", quantity: 10}, 
  {name: "juice", quantity: 20}, {name: "cake", quantity: 30},
  {name: "tart", quantity: 40}, {name: "tea", quantity: 50}];

  var boughtList = [];

  service.getBuyList = function(){
    return buyList;
  };

  service.getBoughtList = function(){
    return boughtList;
  };

  service.buy = function(itemIndex){
    var itemName = buyList[itemIndex].name;
    var itemQuantity = buyList[itemIndex].quantity;

    var item = {name: itemName, quantity: itemQuantity}

    buyList.splice(itemIndex, 1);
    boughtList.push(item);
  }
} 

})();