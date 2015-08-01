
var studentApp = angular.module('studentApp', ['ngRoute','ngResource',
    'ui.bootstrap',
    'createControllers',
    'viewControllers',
    'studentFactory',
    'loginControllers',
    'modalControllers',
    'headerControllers',
    'authServices',
    'studentDirectives']);

studentApp.run(function ($rootScope, $location, authService) {

    // global variables
    $rootScope.isModalOpen = false;
    $rootScope.isLoggedIn = false;
    $rootScope.userName = "";

    $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
        debugger
        if (next != undefined) {
            if (next.params.page.toLowerCase() != "logout" && next.params.page.toLowerCase() != "login") {
                authService.validateLogin();
            }
        }
    });

    $rootScope.$on('$routeChangeStart', function (event, next, current) {


    });

});



studentApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            redirectTo: 'student/login'
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

studentApp.constant("appConsts", {
    "jsonurl": "/content/json/student-profiles.json",
    "gMailurl": "http://www.gmail.com"

});

var isModalOpen = false;
