  var app=angular.module('myApp',[]);
app.controller("RealController",['$scope',function($scope){
  
$scope.homeObj={};
$scope.stst=[];



$scope.list2=[{PropertyName:"Katraj",PropertyType:"Buy"},
             {PropertyName:"Dhankawadi",PropertyType:"Rent"},
             {PropertyName:"Pune",PropertyType:"Sell"}];



$scope.Buy=true;
$scope.Sell=true;
$scope.Rent=true;

alert(JSON.stringify($scope.list2));


$scope.hide1=function(){
  $scope.Buy=false;
  $scope.Rent=false;
  $scope.Sell=true;
}

$scope.hide=function(){
  $scope.Buy=true;
  $scope.Rent=true;
  $scope.Sell=true;
}

$scope.hide2=function(){
  $scope.Buy=true;
  $scope.Rent=false;
  $scope.Sell=false;
}

$scope.hide3=function(){
  $scope.Buy=false;
  $scope.Rent=true;
  $scope.Sell=false;
}
//$scope.backendList[];
//   $scope.getAllPropertiesByBudget=function()
//    {
//     alert("HII");

//     realDetailsMasterService.getBudgetRecord().then(function(response)
//     {
//         alert("Main List");
//        $scope.backendList=response.data;
//        alert(JSON.stringify($scope.backendList));
// })
// }


// $scope.getAllPropertiesByBudget();


  



//   $scope.getActiveBuyProperties=function()
//    {

//     realDetailsMasterService.getBuyRecord().then(function(response)
//     {

//        $scope.buyList=response.data;
// })
// }


// $scope.getActiveBuyProperties();



// $scope.getActiveRentProperties=function()
//    {

//     realDetailsMasterService.getRentRecord().then(function(response)
//     {

//        $scope.rentList=response.data;
// })
// }


// $scope.getActiveRentProperties();




// $scope.getActivePreLeasedProperties=function()
//    {

//     realDetailsMasterService.getPreLeasedRecord().then(function(response)
//     {

//        $scope.preLeasedList=response.data;
// })
// }


// $scope.getActivePreLeasedProperties();



  
}]);

// app.service("realDetailsMasterService",function($http){

// this.getBudgetRecord=function()
// {
//       return $http.get("http://localhost:8095/"+"getBudget");

// }



//  this.getBuyRecord=function()
// {
//       return $http.get("http://localhost:8095/"+"getBuy");

// }

// this.getRentRecord=function()
// {
//       return $http.get("http://localhost:8095/"+"getRent");

// }

// this.getPreLeasedRecord=function()
// {
//       return $http.get("http://localhost:8095/"+"getPreLeased");

// }


// });
