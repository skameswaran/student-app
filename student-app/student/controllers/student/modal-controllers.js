var modalControllers = angular.module('modalControllers', []);
modalControllers.controller('loginmodalCtrl', ['$scope', '$location', 'modalProvider', 'authService',
function ($scope, $location, modalProvider, authService) {

    $scope.authenticate = function () {
        authService.setlocalStorage('user', $scope.username);        
        $location.path('/student/create');
        modalProvider.closeModal();
    };

}]);

