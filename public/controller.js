angular.module('roomateApplicantTracker', [])

.controller('tableController',['$scope',function($scope) {
    $scope.count = 3;
    $scope.customer = {
    	address: "165 Norwood Ave"
    }
}])
.directive('myCustomer', function() {
  return {
    //template: 'Name: {{count}} Address: {{customer.address}}'
    templateUrl : 'test.html'
  };
});