(function() {
    'use strict';

    angular.module('app.core')
        .factory('DataService', DataService);

    DataService.$inject = ['$q', '$http'];
    /* @ngInject */
    function DataService($q, $http) {

        var service = {
            GetData: GetData
        };

        return service;

        function GetData() {
            return $http.get('app/data/search.json');
        }

    }

})();
