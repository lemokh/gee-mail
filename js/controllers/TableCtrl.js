app.controller('TableCtrl', ['$scope', function($scope){
    
    $scope.checkMail = function() {
      $scope.messages = window.geemails;    
    };
    $scope.checkMail();
}]);