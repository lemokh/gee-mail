app.controller('OpenCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.messages = window.geemails;
    $scope.message = window.geemails[$routeParams.id];
}]);