var steven=angular.module('steven', []);

steven.controller('SomeController', ['$scope', '$http',  function($scope, $http){
  
  $http.get('/api/sample.json').success(function(data, status, headers, config){
    $scope.data = data;
  });

  $scope.detail = null;
  

  $scope.showDetail = function(id) {
    $scope.detail = null;
    var foundItems = $scope.data.filter(function(ele) {
      return ele.id === id;
    });

    if (foundItems.length > 0) {
      $scope.detail = foundItems[0];
    }

    
  }

}]);