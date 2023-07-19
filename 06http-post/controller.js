var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function ($scope, $http) {
    // GUARDAR POST
    $scope.nuevopost = {};
    $scope.addPost = function() {
        $http.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: {
                title: $scope.nuevopost.title,
                body: $scope.nuevopost.body,
                userId: 1,
            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then((response) => {
            $scope.posts.push($scope.nuevopost);
            $scope.nuevopost = {};
            console.log("data", response);
        }, (err) => {
            console.log("error", err);
        });
    }
    // OBTENER POSTS
    $scope.posts = [];
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            $scope.posts = response.data;
            console.log("data", response.data);
        }, function (err) {
            console.log("error", err)
        });
});


