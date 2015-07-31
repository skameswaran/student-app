
var loginControllers = angular.module('loginControllers', []);
loginControllers.controller('getloginCtrl', ['$scope', 'modalProvider', 'authService', '$location',
    function ($scope, modalProvider, authService, $location) {

        if (authService.getlocalStorage("user") == "" ||
                authService.getlocalStorage("user") == null ||
                authService.getlocalStorage("user") == undefined) {
            
            modalProvider.openModal("/student/views/GetLoginInfo.html", "lg", "loginmodalCtrl", "static", false);
        }
        else {
            $location.path('/student/create');
        }

       
    }]);

loginControllers.controller('logoutCtrl', ['$location',
    function ($location) {
        
        history.go(-(history.length - 1));
        $location.path('student/login');
        
    }]);