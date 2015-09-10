(function() {

    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',

        /* Feature areas */
        'app.layout',
        'app.drfind',
        'ngMap'
    ])
    .config(config)
    .run(run);


    config.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];
    /* @ngInject */
    function config($stateProvider, $httpProvider, $urlRouterProvider) {

        $stateProvider
            .state('drfind', {
                url: '/drfind',
                templateUrl: 'app/drfind/drfind.html',
                controller: 'DrFind',
                controllerAs: 'df'
            });

        $urlRouterProvider.otherwise('drfind');
    }

    run.$inject = ['$state'];
    /* @ngInject */
    function run($state) {
        $state.go('drfind');
    }

})();
