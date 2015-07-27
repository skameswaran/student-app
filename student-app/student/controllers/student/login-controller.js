
var loginControllers = angular.module('loginControllers', []);
loginControllers.controller('getloginCtrl', ['$scope', 'modalProvider', function ($scope, modalProvider) {

    $scope.promptLogin = function () {
        $scope.modalinstace = modalProvider.openModal(
            '/student/views/GetLoginInfo.html',
            'lg', false, false);
    }

    $scope.checkUserLoggedin = function () {
        if (localStorage.getItem("username") == "" ||
            localStorage.getItem("username") == null ||
            localStorage.getItem("username") == undefined) {
            $scope.promptLogin();
        }

    };

    $scope.checkUserLoggedin();

}]);