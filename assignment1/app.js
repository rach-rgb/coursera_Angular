(function(){
// 'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.message = "";

	$scope.checker = function(){
		 var dishNum = countDishes($scope.userText);
		 if(dishNum==0)
		 {
			$scope.message = "Please enter data first";
			$scope.stateColor = "Red";
		 }
		 else if(dishNum <= 3)
		 {
			$scope.message = "Enjoy!";
			$scope.stateColor = "Green";
		 } else
		 {
			$scope.message = "Too much!";
			$scope.stateColor = "Green";
		 }
		 
	}

	var countDishes = function(string){
		if((string == undefined) || (string == ""))
		{
			return 0;
		}

		var dishes = string.split(',');
		var len = dishes.length;

		for(var i = 0; i < dishes.length; i++)
		{
			if(dishes[i].trim()==""){ len--; }
		}

		return len;
	}
}

})();