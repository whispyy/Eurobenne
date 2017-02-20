(function(){
  'use strict';
  
  angular
  .module('fjs.components')
  .directive('sideshortcut', sideshortcutDefinition);
  
  function sideshortcutDefinition() {
      return {
          restrict: 'E',
          templateUrl: 'app/components/sideshortcut/sideshortcut.html',
          scope: {
              text: '=',
              type: '='
          },
          controller: sideshortcutDirectiveController,
          controllerAs: 'vm',
          bindToController: true
      };
  }
  
  sideshortcutDirectiveController.$inject = ['bennes'];
  function sideshortcutDirectiveController(bennes) {
    var vm = this;
    vm.bennes3 = bennes.get3Bennes();
  }
    
})();