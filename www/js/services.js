angular.module('starter.services', ['ngResource'])

.factory('Friends', function($resource) {
    return $resource('http://127.0.0.1:5000/api/v1.0/group-members/1')
})

