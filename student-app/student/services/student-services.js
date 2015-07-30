﻿var studentFactory = angular.module('studentFactory', ['ngResource']);

studentFactory.factory('Profiles', ['$resource', 'appConsts', function ($resource, appConsts) {
    return $resource(appConsts.jsonurl);
}]);

studentFactory.service('modalProvider', ['$modal', function ($modal) {
    this.modalInstance;
    this.confirminstance;
    this.openModal = function (urlTemplate, size, controller, backdrop, keyboard) {
        this.modalInstance = $modal.open({
            templateUrl: urlTemplate,
            size: size,
            controller: controller,
            backdrop: backdrop,
            keyboard: keyboard
        });
    }

    this.confirmBox = function (message, title) {
        return $modal.open({
            templateUrl: "/student/views/confirm-model.html",
            size: 'lg',
            controller: function ($scope, $modalInstance) {
                $scope.message = message;
                $scope.title = title;
                $scope.ok = function (result) {
                    result = true;
                    $modalInstance.close(result);
                };
                $scope.close = function (result) {
                    $modalInstance.dismiss('cancel');
                };
            },
            backdrop: "static",
            keyboard: false
        }).result;
    };


    this.closeModal = function () {
        this.modalInstance.dismiss('cancel');
    }


}]);

var confirmBoxCtrl = function ($scope, $modalInstance) {
    $scope.ok = function () {

        $modalInstance.close(true);
        return true;
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};


