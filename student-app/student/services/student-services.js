var studentFactory = angular.module('studentFactory', ['ngResource']);

studentFactory.factory('Profiles', function ($resource) {
    return $resource('/content/json/student-profiles.json');
});