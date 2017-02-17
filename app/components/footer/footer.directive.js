(function(){
    'use strict';
    
    angular
    .module('fjs.components')
    .directive('myfooter', footerDefinition);
    
    function footerDefinition() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/footer/footer.html',
            scope: {
                text: '=',
                type: '='
            },
            controller: footerDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    
    function footerDirectiveController() {
        var vm = this;
        
    }
    
})();