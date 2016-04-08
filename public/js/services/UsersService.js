app.service("Users", Users);
function Users($http) {

    this.getUsers = function() {
        return $http.get("/users").
        then(
            function(response) {
                return response;
            },
            function(response) {
                alert("Error finding users.");
            }
        );
    }

    this.createUser = function(user) {
        return $http.post("/users", user).
        then(
            function(response) {
                return response;
            },
            function(response) {
                alert("Error creating users.");
            }
        );
    }

    this.getUser = function(userId) {
        var url = "/users/" + userId;
        return $http.get(url).
        then(
            function(response) {
                return response;
            },
            function(response) {
                alert("Error finding user.");
            }
        );
    }

    this.editUser = function(user) {
        var url = "/users/" + user._id;
        console.log(user._id);
        return $http.put(url, user).
        then(
            function(response) {
                return response;
            },
            function(response) {
                alert("Error editing user.");
            }
        );
    }

    this.deleteUser = function(userId) {
        var url = "/users/" + userId;
        return $http.delete(url).
        then(
            function(response) {
                return response;
            },
            function(response) {
                alert("Error deleting users.");
            }
        );
    }
}