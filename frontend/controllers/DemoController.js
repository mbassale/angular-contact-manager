angular.module('contactsMgr')
  .controller('DemoCtrl', ['$scope', '$alert', function ($scope, $alert) {
    $scope.modal = {
      title: 'Modal Title',
      content: 'Modal Content'
    };

    $scope.tooltip = {
      title: 'Tooltip Title'
    };

    $scope.popover = {
      title: 'Title',
      content: 'Popover content'
    };

    $scope.alert = {
      title: 'Title',
      content: 'Alert content',
      type: 'danger'
    };

    var alert = $alert({
      title: 'Alert Title!',
      content: "Here's some content.",
      type: 'danger',
      container: '#alertContainer',
      show: false
    });
    $scope.showAlert = alert.show;
  }]);
