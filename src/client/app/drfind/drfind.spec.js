/* jshint -W117 */
describe('DrFind', function() {

    var ctrl;
    var scope;
    var DataService;
    var res = {
        items: [
            {key:'value'},
            {key:'value'},
            {key:'value'},
            {key:'value'},
            {key:'value'},
            {key:'value'},
            {key:'value'},
            {key:'value'},
            {key:'value'},
            {key:'value'}
        ]
    };

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope, $injector, $q) {
        DataService = $injector.get('DataService');
        spyOn(DataService, 'GetData').and.returnValue($q.when(res));
        ctrl = $controller('DrFind', {$scope: scope});
        scope = $rootScope;

    }));

    it('should have 10 Professionals items', function() {
        scope.$digest();
        expect(ctrl.items.length).toBe(res.items.length);
    });

});
