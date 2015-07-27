var modalControllers = angular.module('modalControllers', []);
modalControllers.controller('loginmodalCtrl', ['$scope', '$location', 'modalProvider',
    function ($scope, $location, modalProvider) {

        $scope.closeLoginPrompt = function () {
            modalProvider.closeModal();
            window.location.href = '#/student/create';

        };


    }]);