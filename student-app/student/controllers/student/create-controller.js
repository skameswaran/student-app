var createControllers = angular.module('createControllers', [])

createControllers.controller('createCtrl', ['$scope', function ($scope) {

    $scope.Create = function () {        
        if ($scope.frmEntry.$valid)
            alert('Added ' + $scope.studentName);
    };

}]);