(function() {

    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',

        /* Feature areas */
        'app.layout',
        'app.drfind',
        'app.home',
        'ngMap'
    ])
    .config(config)
    .run(run);


    config.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];
    /* @ngInject */
    function config($stateProvider, $httpProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'Home',
                controllerAs: 'hm'
            })
            .state('drfind', {
                url: '/drfind',
                templateUrl: 'app/drfind/drfind.html',
                controller: 'DrFind',
                controllerAs: 'df'
            });

        $urlRouterProvider.otherwise('home');
    }

    run.$inject = ['$state'];
    /* @ngInject */
    function run($state) {
        $state.go('home');
    }

})();
