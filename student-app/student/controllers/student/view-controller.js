var viewControllers = angular.module('viewControllers', [])

viewControllers.controller('viewCtrl', ['$scope', 'Profiles', 'ProfilesFact', function ($scope, Profiles, ProfilesFact) {

    $scope.profiles = ProfilesFact.result;
    debugger;
    $scope.Create = function () {
        if ($scope.frmEntry.$valid)
            alert('Added ' + $scope.studentName);
    };

}]);