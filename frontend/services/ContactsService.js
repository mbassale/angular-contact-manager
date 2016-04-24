angular.module('contactsMgr')
  .factory('contacts', ['$q', '$http', function ($q, $http) {
    var contactState = {
      contacts: []
    };
    return {
      get: function () {
        var deferred = $q.defer();

        $http.get('api/contacts').then(
          function (response) {
            contactState.contacts = response.data;
            deferred.resolve(contactState.contacts);
          },
          function () {
            deferred.reject();
          }
        );

        return deferred.promise;
      },
      find: function (index) {
        return contactState.contacts[index];
      },
      create: function (contact) {
        var deferred = $q.defer();

        $http.post('api/contacts', contact).then(
          function (response) {
            if (response.data.success) {
              deferred.resolve(response.contact);
            } else {
              deferred.reject();
            }
          },
          function () {
            deferred.reject();
          }
        );

        $http.get('api/contacts').then(
          function (response) {
            contactState.contacts = response.data;
          },
          function () {}
        );

        return deferred.promise;
      },
      destroy: function (index) {
        var deferred = $q.defer();
        var contact = this.find(index);
        $http.delete('api/contacts/' + contact._id).then(
          function (response) {
            deferred.resolve(response.data.success);
          },
          function () {
            deferred.reject();
          }
        );
        return deferred.promise;
      }
    };
  }]);
