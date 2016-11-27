(function() {
  'use strict';

  angular
    .module('angularApp5')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
