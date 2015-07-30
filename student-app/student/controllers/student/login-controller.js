
var loginControllers = angular.module('loginControllers', []);
loginControllers.controller('getloginCtrl', ['$scope', 'modalProvider','authService','$location',
    function ($scope, modalProvider, authService, $location) {

        $scope.promptLogin = function () {
            modalProvider.openModal("/student/views/GetLoginInfo.html", "lg", "loginmodalCtrl", "static", false);
        }

        $scope.checkUserLoggedin = function () {
            if (authService.getlocalStorage("user") == "" ||
                authService.getlocalStorage("user") == null ||
                authService.getlocalStorage("user") == undefined) {                
                $location.path('/student/login');               
                $scope.promptLogin();
            }
            else {
                $location.path('/student/create');
            }

        };

        $scope.checkUserLoggedin();

    }]);