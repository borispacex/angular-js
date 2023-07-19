var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope) {
    $scope.nombre = "Boris Vargas";
    $scope.comentarios = [
        {
            comentario: 'Buen tutorial',
            username: 'borispacex'
        },
        {
            comentario: 'Buen profesor',
            username: 'otroUsuario'
        }
    ];
    $scope.agregarComentario = function() {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});
// MVVM

