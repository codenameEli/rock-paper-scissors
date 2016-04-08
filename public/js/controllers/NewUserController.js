app.controller("NewUserController", NewUserController);

function NewUserController($scope, $location, Users) {
    $scope.back = function() {
        $location.path("#/");
    }

    $scope.saveUser = function(user) {
        Users.createUser(user).then(function(doc) {
            var userUrl = "/user/" + doc.data._id;
            $location.path(userUrl);
        }, function(response) {
            alert(response);
        });
    }
};