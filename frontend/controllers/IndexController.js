angular.module('contactsMgr')
  .controller('IndexCtrl', ['$scope', 'contacts', '$alert', function ($scope, contacts, $alert) {
    var deletionAlert = $alert({
      title: 'Success!',
      content: 'The contact was deleted successfully.',
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

    $scope.contacts = [];
    contacts.get().then(
      function (contacts) {
        $scope.contacts = contacts;
      },
      function () {
        networkErrorAlert.show();
      }
    );

    $scope.delete = function (index) {
      contacts.destroy(index);
      deletionAlert.show();
    };
  }]);
