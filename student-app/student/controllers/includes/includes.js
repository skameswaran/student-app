var headerControllers = angular.module('headerControllers', ['ngRoute']);

headerControllers.controller('headerCtrl', ['$scope', '$rootScope', '$location', 'authService', 'modalProvider',
    function ($scope, $rootScope, $location, authService, modalProvider) {
        authService.validateLogin();
    }]);

headerControllers.controller('menuCtrl', ['$scope', '$location', 'authService',
    function ($scope, $location, authService) {
        $scope.menuList = [{
            "name": "Create Student",
            "link": "#/student/create"
        },
          {
              "name": "Student View",
              "link": "#/student/view"
          }];
    }]);

headerControllers.controller('footerCtrl', ['$scope', '$location', 'authService',
    function ($scope, $location, authService) {
        //authService.validateLogin();
    }]);