var app = angular.module('GeemailApp', ['ngRoute']);

app.config(["$routeProvider", function($routeProvider){
  $routeProvider.when('/', {templateUrl:"js/views/table.html", controller:"TableCtrl"});
  $routeProvider.when('/open/:id', {templateUrl:"js/views/open.html", controller:"OpenCtrl"});
}]);