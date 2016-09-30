var app = angular.module("coordinateApp", []);
app.controller("coordinateCtrl", function($scope, $http){
    $http.get("coordinates.json").success(function(response){  // Retrieving data from coordinates.json file 
$scope.coordinatesArray = response; // The retrieved data is assigned to coordinatesaArray which is attached to $scope in order to make it available to the view.
$scope.coordinates = []; 
$scope.distance1 = [];
//When the button is clicked the function below is called.
$scope.nearToFarCoordinates = function(){  
if ($scope.x === undefined && $scope.y === undefined){
	alert("Please enter both coordinates");
} else {
for(var i=0; i < $scope.coordinatesArray.length; i++){ // Iterating through coordinatesArray in order to perform calculations  on each element of the array
$scope.coordinates[i] = $scope.coordinatesArray[i].value.split(","); // Conevrting string values of value propery of coordinatesArray to array and sroting this value in coordinates array. This helps to perform next line calculation

$scope.distance1[i] = Math.round(Math.pow(Math.pow($scope.coordinates[i][0] - $scope.x, 2) + Math.pow($scope.coordinates[i][1] - $scope.y, 2), 0.5)); //Calculating the distance between each (x,y) in coordinates array and the given input (x, y) coordinates. 
$scope.coordinatesArray[i].distance = $scope.distance1[i]; // Adding distance property to the coordinatesArray,so that the coordinatesArray elements can be displayed in nearest to farthest coordinates format.
         }
$scope.coordinatesArray1 = $scope.coordinatesArray; // Assigning updated array to coordinatesArray1
}
}


});

});