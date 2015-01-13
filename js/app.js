var steven=angular.module('steven', []);

steven.controller('SomeController', ['$scope', '$http',  function($scope, $http){
  
  $http.get('/api/sample.json').success(function(data, status, headers, config){
    $scope.data = data;
  });

  $scope.detail = null;

  $scope.showDetail = function(item) {
    $scope.detail = item;
  }

}]);