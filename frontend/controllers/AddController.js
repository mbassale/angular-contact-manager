angular.module('contactsMgr')
  .controller('AddCtrl', ['$scope', 'contacts', '$alert', function ($scope, contacts, $alert) {
    var alert = $alert({
      title: 'Success!',
      content: 'The contact was added successfully.',
      type: 'success',
      container: '#alertContainer',
      show: false
    });
    var networkErrorAlert = $alert({
      title: 'Network Error!',
      contact: 'Cannot communicate with server, please try again later.',
      type: 'danger',
      container: '#alertContainer',
      show: false
    });
    $scope.submit = function () {
      contacts.create($scope.contact).then(
        function (contacts) {
          $scope.contact = null;
          $scope.added = true;
          alert.show();
        },
        function () {
          networkErrorAlert.show();
        }
      );
    };
  }]);
