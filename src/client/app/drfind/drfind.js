(function() {
    'use strict';
    /*global _:false */

    angular.module('app.core')
        .controller('DrFind', DrFind);

    DrFind.$inject = ['DataService'];
    /* @ngInject */
    function DrFind(DataService) {
        var vm = this;
        vm.GetData = GetData;
        vm.DocSelect = DocSelect;
        vm.items = [];
        vm.selected = {};
        vm.markers = [];



        // Initial Functions
        vm.InitPage = function() {
            console.log('fired');
            vm.GetData(); // Get the json data on page load
        };

        function GetData() {
            DataService.GetData().success(function(res) {
                vm.items = res.professionals; // Make the json object available to the DOM
                console.log('vm.items: ', vm.items);
            });
        }

        // Click handler to add a marker to the map when user clicks on a doctor
        function DocSelect(data) {
            vm.markers = []; // clear the markers so only one shows on map at a time

            // grab the selected doctor
            vm.selected = {
                name: data.name,
                pos: [data.locations[0].address.latitude, data.locations[0].address.longitude]
            };

            // add it to the markers array to display the marker
            vm.markers.push(vm.selected);

        }
    }


})();
