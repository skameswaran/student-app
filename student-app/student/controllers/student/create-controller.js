﻿var createControllers = angular.module('createControllers', [])

createControllers.controller('createCtrl', ['$scope', function ($scope) {

    $scope.Create = function () {
        if ($scope.frmEntry.$valid)
            alert('Added ' + $scope.studentName);
    };

}]);


function allowDrop(ev) {
    debugger;
    var obj = ev.dataTransfer.getData("Files");
    ev.preventDefault();
}
function Drop(ev) {
    debugger;

    ev.preventDefault();
}

