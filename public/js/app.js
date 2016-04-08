app = angular.module("usersApp", ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "game.html",
            controller: "GameController"
        })
        .when("/dashboard", {
            templateUrl: "list.html",
            controller: "ListController",
            resolve: {
                users: function(Users) {
                    return Users.getUsers();
                }
            }
        })
        .when("/new/user", {
            controller: "NewUserController",
            templateUrl: "user-form.html"
        })
        .when("/user/:userId", {
            controller: "EditUserController",
            templateUrl: "user.html"
        })
        .otherwise({
            redirectTo: "/"
        })
});