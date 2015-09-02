angular.module('roomateApplicantTracker', ['highcharts-ng'])

.controller('tableController',['$scope','highchartsNG',function($scope, highchartsNG) {
    $scope.count = 3;
    $scope.customer = {
    	address: "165 Norwood Ave"
    }

    $scope.highchartspieNG = {
        options: {
            chart: {
                type: 'pie',
                height: 200
            }
        },
        series: [{
        	name : "Starting 5",
            data: [{name: "personA", y: 10}, 
                     {name: "personB",  y: 15}, 
                     12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },
        loading: false
    }
        $scope.highchartsbarNG = {
        options: {
            chart: {
                type: 'bar',
                height: 200
            }
        },
        series: [{
        	name : "Starting 5",
            data: [{name: "personA", y: 10}, 
                     {name: "personB",  y: 15}, 
                     12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },
        loading: false
    }

            $scope.highchartslineNG = {
        options: {
            chart: {
                type: 'line',
                height: 200
            }
        },
        series: [{
        	name : "Starting 5",
            data: [{name: "personA", y: 10}, 
                     {name: "personB",  y: 15}, 
                     12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },
        loading: false
    }

}])
.directive('dashboard', function() {
  return {
    templateUrl : 'dashboard.html'
  };
});