var authServices = angular.module('authServices', ['ngResource']);

authServices.service('authService', ['$modal', '$rootScope', '$location', function ($modal, $location, $rootScope) {

    // class in OOJS
    function authService() {
        setlocalStorage = setlocalStorage,
        getlocalStorage = getlocalStorage,
        removelocalStorage = removelocalStorage,
        validateLogin = validateLogin
    };

    // public method in OOJS
    this.removelocalStorage = function (key) {
        localStorage.removeItem(key);
    };

    // public method in OOJS
    this.setlocalStorage = function (key, value) {
        localStorage.setItem(key, value)
    };

    // public method in OOJS

    this.getlocalStorage = function (key) {
        return localStorage.getItem(key);
    };

    this.validateLogin = function () {
        if (this.getlocalStorage("user") == ""
                || this.getlocalStorage("user") == null
                || this.getlocalStorage("user") == undefined) {
            $rootScope.isLoggedIn = false;
            location.href = '#/';
        }
    };

    this.checkUserLogin = function () {
        if (this.getlocalStorage("user") == ""
                || this.getlocalStorage("user") == null
                || this.getlocalStorage("user") == undefined) {
            $rootScope.isLoggedIn = false;
        }
        else {
            $rootScope.isLoggedIn = true;
        }
    }

    this.logout = function () {
        this.removelocalStorage("user");
        this.removelocalStorage("isLoggedIn");
        history.go(-(history.length - 1));
        $location.path('student/logout');
    };

}]);