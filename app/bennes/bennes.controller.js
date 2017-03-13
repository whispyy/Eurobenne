(function(){
    'use strict';
    
    angular
    .module('fjs.bennes')
    .controller('BennesController', bennesController);
    
    bennesController.$inject = ['bennes'];

    function bennesController(bennes) {
        var vm = this;
        
        vm.search;

        vm.categories = bennes.getCategories();
        vm.bennes = bennes.getBennes();
        console.log(vm.bennes3);
        console.log(vm.bennes);

        vm.selectCat = function(cat){
            vm.search = cat;
        }
        
        vm.benneActive;
        $(document).ready(function(){
          // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
          $('.modal').modal();
        });
          
    }
    
})();