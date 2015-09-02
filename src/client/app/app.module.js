(function() {

    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',

        /* Feature areas */
        'app.layout',
        'app.drfind',
        'ngMap'
    ]).config(config);


    config.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];
    /* @ngInject */
    function config($stateProvider, $httpProvider, $urlRouterProvider) {


        // $stateProvider
        //     .state('drfind', {
        //         url: '/drfind',
        //         templateUrl: 'app/drfind/drfind.html',
        //         controller: 'DrFind',
        //         controllerAs: 'vm'
        //     });


        // $urlRouterProvider.otherwise('drfind');
    }

})();
