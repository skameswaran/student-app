var authServices = angular.module('authServices', ['ngResource']);

authServices.service('authService', ['$modal', function ($modal) {

    function authService() {
        setlocalStorage = setlocalStorage,
        getlocalStorage = getlocalStorage,
        removelocalStorage = removelocalStorage
    };

    this.removelocalStorage = function (key) {
        localStorage.removeItem(key);
    };

    this.setlocalStorage = function (key, value) {
        localStorage.setItem(key, value)
    };

    this.getlocalStorage = function (key) {
        return localStorage.getItem(key);
    };


}]);