angular.module('contactsMgr')
  .controller('ContactCtrl', ['$scope', '$routeParams', 'contacts', function ($scope, $routeParams, contacts) {
    $scope.contactLoaded = false;
    $scope.contact = contacts.find($routeParams.id);
    $scope.$watch('contact', function () {
      if (!$scope.contactLoaded) {
        $scope.contactLoaded = true;
      } else {
        contacts.update($scope.contact);
      }
    }, true);
  }]);
