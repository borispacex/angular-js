var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope, $http) {
    $scope.posts = [];
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
            $scope.posts = response.data;
            console.log("data", response.data);
        }, function(err) {
            console.log("error", err)
        })
        
});
// MVVM

