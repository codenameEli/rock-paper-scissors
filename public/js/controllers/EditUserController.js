app.controller("EditUserController", EditUserController);

function EditUserController($scope, $routeParams, Users) {
    Users.getUser($routeParams.userId).then(function(doc) {
        $scope.user = doc.data;
    }, function(response) {
        alert(response);
    });

    $scope.toggleEdit = function() {
        $scope.editMode = true;
        $scope.userFormUrl = "user-form.html";
    }

    $scope.back = function() {
        $scope.editMode = false;
        $scope.userFormUrl = "";
    }

    $scope.saveUser = function(user) {
        Users.editUser(user);
        $scope.editMode = false;
        $scope.userFormUrl = "";
    }

    $scope.deleteUser = function(userId) {
        Users.deleteUser(userId);
    }
};