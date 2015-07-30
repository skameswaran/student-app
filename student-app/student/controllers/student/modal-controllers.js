var modalControllers = angular.module('modalControllers', []);
modalControllers.controller('loginmodalCtrl', ['$scope', '$location', 'modalProvider', 'authService',
function ($scope, $location, modalProvider, authService) {

    $scope.authenticate = function () {
        authService.setlocalStorage('user', $scope.username);
        modalProvider.closeModal();
        $location.path('/student/create');
    };


}]);