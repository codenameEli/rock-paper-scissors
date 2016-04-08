app.controller("ListController", ListController);
function ListController(users, $scope) {
	$scope.users = users.data;
}