var headerControllers = angular.module('headerControllers', ['ngRoute']);

headerControllers.controller('headerCtrl', ['$scope', '$rootScope', '$location', 'authService',
    function ($scope, $rootScope, $location, authService) {

        
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            alert();
        });

        $rootScope.validateLogin = function () {

            if (authService.getlocalStorage() == ""
                || authService.getlocalStorage() == null
                || authService.getlocalStorage() == undefined) {
                $location.path('/student/login');
            }
        }

        $rootScope.logout = function () {
            authService.removelocalStorage('user');
        }

        $rootScope.validateLogin();

    }]);

headerControllers.controller('footerCtrl', ['$scope', function ($scope) {

    $scope.userid = 'kamesh';
    $scope.logout = function () {
        alert();
    }
}]);