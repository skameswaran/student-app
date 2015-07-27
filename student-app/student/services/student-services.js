var studentFactory = angular.module('studentFactory', ['ngResource']);

studentFactory.factory('Profiles', ['$resource', 'appConsts', function ($resource, appConsts) {
    return $resource(appConsts.jsonurl);
}]);

studentFactory.service('modalProvider', ['$modal', function ($modal) {
    this.modalInstance;
    this.openModal = function (urlTrmplate, size, backdrop, keyboard) {
        this.modalInstance = $modal.open({
            templateUrl: urlTrmplate,
            size: size,
            controller: 'loginmodalCtrl',
            backdrop: backdrop,
            keyboard: keyboard
        });
    }

    this.closeModal = function () {
        this.modalInstance.dismiss('cancel');
    }


}]);