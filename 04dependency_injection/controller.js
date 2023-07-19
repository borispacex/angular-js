var app = angular.module("MyFirstApp", []);
app.controller("FirstController", ["$scope", function(myscope) {
    myscope.nombre = "Boris Vargas";
    myscope.comentarios = [
        {
            comentario: 'Buen tutorial',
            username: 'borispacex'
        },
        {
            comentario: 'Buen profesor',
            username: 'otroUsuario'
        }
    ];
    myscope.agregarComentario = function() {
        myscope.comentarios.push(myscope.nuevoComentario);
        myscope.nuevoComentario = {};
    }
}]);
// MVVM

