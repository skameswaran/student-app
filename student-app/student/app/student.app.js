
var studentApp = angular.module('studentApp', ['ngRoute', 'createControllers']);

studentApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            redirectTo: '/login'
        })
        .when('/login', {
            templateUrl: function ($routeParams) {
                return '../login.html';
            }
        })
        .when('/:dir/:page', {
            templateUrl: function ($routeParams) {                
                return '../' + $routeParams.dir + '/views/' + $routeParams.page + '.html';
            }
        })
        .otherwise({

        });

}]);
