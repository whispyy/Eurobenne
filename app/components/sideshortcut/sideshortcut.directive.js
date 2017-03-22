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
  
  sideshortcutDirectiveController.$inject = ['bennes', '$location'];
  function sideshortcutDirectiveController(bennes, $location) {
    var vm = this;
    vm.categories = bennes.getCategories();

    vm.goCat = function(cat){
        vm.search = cat;
        $location.path('/bennes');
    }
  }
    
})();