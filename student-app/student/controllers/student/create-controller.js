var createControllers = angular.module('createControllers', [])

createControllers.controller('createCtrl', ['$scope', function ($scope) {

    $scope.Create = function () {
        if ($scope.frmEntry.$valid)
            alert('Added ' + $scope.studentName);
    };

}]);

createControllers.directive('uploadFile', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, elm, attr, ctrl) {

            elm.on('dragover', function (event) {                
                elm.addClass('drop-area-waiting');
                event.preventDefault();
                event.stopPropagation();
            });           
           

            elm.on('drop dragleave', function (event) {
                
                elm.removeClass('drop-area-waiting');
                elm.addClass('drop-area');
                event.preventDefault();
                event.stopPropagation();
            });
        }
    };
});

