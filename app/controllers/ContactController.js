angular.module('contactsMgr')
  .controller('ContactCtrl', ['$scope', '$routeParams', 'contacts', function ($scope, $routeParams, contacts) {
    $scope.contact = contacts.find($routeParams.id);
  }]);
