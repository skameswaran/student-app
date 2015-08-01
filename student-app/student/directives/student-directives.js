﻿
var studentDirectives = angular.module('studentDirectives', []);



studentDirectives.directive('logOut', ['$compile', '$rootScope', 'authService',
function ($compile, $rootScope, authService) {

    return {
        restrict: 'EAC',
        templateUrl: "student/partials/logout.html",
        link: function (scope, elements, attrs) {
            scope.userName = $rootScope.userName;
            setTimeout(function (e) {
                $(elements).popover({
                    'placement': 'bottom',
                    'trigger': 'click',
                    'html': true,
                    'container': 'body',
                    'content': function () {
                        return $compile($("#pop-over-content").html())(scope);
                    }
                });
            });            

            scope.closePopUp = function () {
                $(elements).popover('hide');
            };

            scope.logout = function () {
                scope.closePopUp();
                authService.logout();
            };

        }
    }

}]);

