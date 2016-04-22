angular.module('contactsMgr')
  .factory('contacts', ['$q', '$http', function ($q, $http) {
    var contactState = {
      contacts: []
    };
    return {
      get: function () {
        var deferred = $q.defer();

        $http.get('data/data.json').then(
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
        contactState.contacts.push(contact);
      },
      destroy: function (index) {
        contactState.contacts.splice(index, 1);
      }
    };
  }]);
