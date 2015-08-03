
var createControllers = angular.module('createControllers', [])

createControllers.controller('createCtrl', ['$scope', 'modalProvider', function ($scope, modalProvider) {

    $scope.Create = function () {

        $scope.frmEntry.studentName.$dirty = true;
        $scope.frmEntry.studentEmail.$dirty = true;
        $scope.frmEntry.studentAge.$dirty = true;
        $scope.frmEntry.studentContact.$dirty = true;
        if ($scope.frmEntry.$valid) {
            modalProvider.messageBox("Student added successfully", "Success !!!", true);
        }

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

