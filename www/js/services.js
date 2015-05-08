angular.module('starter.services', [])

.factory('Friends', function() {
    var friends = [{
      id: 0,
      name: "Fulano de Tal"
    },{
      id: 1,
      name: "Beltrano da Silva"
    },{
      id: 2,
      name: "Larisso"
    }];
    
    return {
      all: function() {
        return friends;
      }
    };
});

