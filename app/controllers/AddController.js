angular.module('contactsMgr')
  .controller('AddCtrl', ['$scope', 'contacts', '$alert', function ($scope, contacts, $alert) {
    var alert = $alert({
      title: 'Success!',
      content: 'The contact was added successfully.',
      type: 'success',
      container: '#alertContainer',
      show: false
    });
    $scope.submit = function () {
      contacts.create($scope.contact);
      $scope.contact = null;
      $scope.added = true;
      alert.show();
    };
  }]);
