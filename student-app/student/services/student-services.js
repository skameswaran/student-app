var studentFactory = angular.module('studentFactory', ['ngResource']);

studentFactory.factory('Profiles', ['$resource', 'appConsts', function ($resource, appConsts) {
    return $resource(appConsts.jsonurl);
}]);

studentFactory.service('ProfilesFact', ['$http', 'appConsts', function ($http, appConsts) {

    var ser = {
        getData: getData,
        result: result
    };

    var result=[];
    function result() {
        $http.get(appConsts.jsonurl)
                      .success(function (data, status, headers, config) {
                          result= data;
                      })
                      .error(function (data, status, headers, config) {
                          result = null;
                      });
    }

    return ser;
}]);