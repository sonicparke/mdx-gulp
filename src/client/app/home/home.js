(function() {
    'use strict';
    /*global _:false */

    angular.module('app.home')
        .controller('Home', Home);

    Home.$inject = ['DataService'];
    /* @ngInject */
    function Home(DataService) {
        var vm = this;
        vm.homeText = 'This is the home page';

        vm.GetFeatures = GetFeatures;
        vm.GetFeatures();


        function GetFeatures() {
            DataService.GetFeatures().success(function(res) {
                vm.features = res.features[0]; // Make the json object available to the DOM
            });
        }

    }
})();
