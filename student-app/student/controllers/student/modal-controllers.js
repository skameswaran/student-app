var modalControllers = angular.module('modalControllers', []);
modalControllers.controller('loginmodalCtrl', ['$scope', '$location', 'modalProvider',
    function ($scope, $location, modalProvider) {

        $scope.authenticate = function () {
            modalProvider.closeModal();
            $location.path('/student/create');
        };


    }]);