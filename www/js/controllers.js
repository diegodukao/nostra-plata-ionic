angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('GroupsCtrl', function($scope, Friends) {
	$scope.friends = Friends.query();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
});
