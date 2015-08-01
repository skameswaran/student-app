var modalControllers = angular.module('modalControllers', []);
modalControllers.controller('loginmodalCtrl', ['$scope', '$location', '$rootScope', 'modalProvider', 'authService',
function ($scope, $location,$rootScope, modalProvider, authService) {

    $scope.authenticate = function () {
        authService.setlocalStorage('isLoggedIn', true);
        authService.setlocalStorage('user', $scope.username);
        $rootScope.userName = $scope.username;
        $location.path('/student/create');
        modalProvider.closeModal();
    };

}]);

