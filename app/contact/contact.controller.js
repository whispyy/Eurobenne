(function(){
    'use strict';
    
    angular
    .module('fjs.contact')
    .controller('ContactController', contactController);
    
    function contactController($filter) {
        var vm = this;
        
        vm.message = "Hello World !!";
        
    }
    
})();