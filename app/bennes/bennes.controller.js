(function(){
    'use strict';
    
    angular
    .module('fjs.bennes')
    .controller('BennesController', bennesController);
    
    bennesController.$inject = ['bennes'];

    function bennesController(bennes) {
        var vm = this;
        
        vm.bennes3 = bennes.get3Bennes();
        vm.bennes = bennes.getBennes();
        console.log(vm.bennes3);
        console.log(vm.bennes);
        
    }
    
})();