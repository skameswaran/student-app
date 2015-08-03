
var loginControllers = angular.module('loginControllers', []);
loginControllers.controller('getloginCtrl', ['$scope', '$rootScope', 'modalProvider', 'authService', '$location',
    function ($scope, $rootScope, modalProvider, authService, $location) {

        if (authService.getlocalStorage("user") == "" ||
                authService.getlocalStorage("user") == null ||
                authService.getlocalStorage("user") == undefined) {

            modalProvider.openModal("/student/views/GetLoginInfo.html", "lg", "loginmodalCtrl", "static", false);
        }
        else {
            location.href = "landing-page.html#/student/create";
        }
    }]);

loginControllers.controller('logoutCtrl', ['$location',
    function ($location) {
        
        history.go(-(history.length - 1));
        $location.path('/')       

    }]);