var app = angular.module("ToDoList", ["LocalStorageModule"]);
app.controller("ToDoController", function ($scope, localStorageService) {
    if (localStorageService.get("angular-todolist")) {
        $scope.todo = localStorageService.get("angular-todolist");
    } else {
        $scope.todo = [];
    }
    /* {
        activiad: 'Terminar el curso Angular',
        fecha: '3-03-15 2:00pm'
    } */
    $scope.$watchCollection("todo", function(newValue, oldValue) {
        localStorageService.set("angular-todolist", $scope.todo);        
    });
    $scope.addActv = function() {
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
    };
    $scope.clean = function () {
        $scope.todo = [];
    };
});


