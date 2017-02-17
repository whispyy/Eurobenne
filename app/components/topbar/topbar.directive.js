(function(){
    'use strict';
    
    angular
    .module('fjs.components')
    .directive('topbar', topbarDefinition);
    
    function topbarDefinition() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/topbar/topbar.html',
            scope: {
                text: '=',
                type: '='
            },
            controller: topbarDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    
    function topbarDirectiveController() {
        var vm = this;

        //init the mobile menu
        $(".button-collapse").sideNav();
    }
    
})();