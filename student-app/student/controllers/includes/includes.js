var headerControllers = angular.module('headerControllers', ['ngRoute']);

headerControllers.controller('headerCtrl', ['$scope', '$rootScope', '$location', 'authService', 'modalProvider',
    function ($scope, $rootScope, $location, authService, modalProvider) {
        $scope.promptLogin = function () {
            $location.path('/student/login');           
        }

        $scope.checkUserLoggedin = function () {

            if (authService.getlocalStorage("user") == "" ||
                authService.getlocalStorage("user") == null ||
                authService.getlocalStorage("user") == undefined) {
                $scope.promptLogin();
            }
            else {
                $location.path('/student/create');
            }
        };


        $scope.logout = function () {
            debugger;
            authService.removelocalStorage('user');
            $location.path('student/logout');
        };

        $scope.checkUserLoggedin();
    }]);

headerControllers.controller('footerCtrl', ['$scope', '$location', 'authService',
    function ($scope, $location, authService) {
        authService.validateLogin();
    }]);