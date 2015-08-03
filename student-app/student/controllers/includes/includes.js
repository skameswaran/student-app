var headerControllers = angular.module('headerControllers', ['ngRoute']);

headerControllers.controller('headerCtrl', ['$scope', '$rootScope', '$location', 'authService', 'modalProvider',
    function ($scope, $rootScope, $location, authService, modalProvider) {
        authService.validateLogin();
    }]);

headerControllers.controller('menuCtrl', ['$scope', '$location', 'authService','modalProvider',
    function ($scope, $location, authService, modalProvider) {
        $scope.menuList = [{
            "name": "Create Student",
            "link": "#/student/create"
        },
        {
            "name": "Student View",
            "link": "#/student/view"
        }];

        $scope.logout = function () {
            
            modalProvider.confirmBox("Are you sure want to logout?", "Logout?").then(function (result) {
                
                if (result == true) {
                    
                    authService.logout();
                }
            });            
        };
    }]);

headerControllers.controller('footerCtrl', ['$scope', '$location', 'authService',
    function ($scope, $location, authService) {
        //authService.validateLogin();
    }]);