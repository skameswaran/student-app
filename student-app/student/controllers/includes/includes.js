var headerControllers = angular.module('headerControllers', ['ngRoute']);

headerControllers.controller('headerCtrl', ['$scope', '$rootScope', '$location', 'authService', 'modalProvider',
    function ($scope, $rootScope, $location, authService, modalProvider) {
        
        $scope.promptLogin = function () {
            $location.path('/student/logout');
        }

        $scope.updateuser = function () {
            
            $scope.user = authService.getlocalStorage("user");;
        }

        $scope.checkUserLoggedin = function () {
            
            if (authService.getlocalStorage("user") == "" ||
                authService.getlocalStorage("user") == null ||
                authService.getlocalStorage("user") == undefined) {
                $rootScope.isLoggenin = false;
                $scope.promptLogin();
            }
            else {
                $rootScope.isLoggenin = true;                
            }
        };


        $scope.logout = function () {
            
            authService.removelocalStorage('user');
            $rootScope.isLoggenin = false;
            $location.path('student/logout');
        };

        $scope.checkUserLoggedin();
    }]);

headerControllers.controller('footerCtrl', ['$scope', '$location', 'authService',
    function ($scope, $location, authService) {
        //authService.validateLogin();
    }]);