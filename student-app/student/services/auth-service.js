var authServices = angular.module('authServices', ['ngResource']);

authServices.service('authService', ['$modal', '$location', function ($modal, $location) {

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
        if (this.getlocalStorage() == ""
                || this.getlocalStorage() == null
                || this.getlocalStorage() == undefined) {
            $location.path('/student/logout');
        }
    };


}]);