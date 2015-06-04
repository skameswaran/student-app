var viewControllers = angular.module('viewControllers', [])

viewControllers.controller('viewCtrl', ['$scope', 'Profiles', function ($scope, Profiles) {

    $scope.profiles = Profiles.query();
    
    $scope.Create = function () {
        if ($scope.frmEntry.$valid)
            alert('Added ' + $scope.studentName);
    };

}]);