angular.module('mainModule', [])
    .controller('FirstController', function($scope) {
        $scope.nombre = 'Boris';
        /* setTimeout(function() {
            $scope.$apply(function() {
                $scope.nombre = "Codigo facilito";
            });
        }, 2000); */
        document.querySelector('#mi_boton').addEventListener('click', function() {
            // $scope.nombre = "Codigo facilito";
            $scope.$apply(function() {
                $scope.nombre = "Codigo facilito";
            });
        });
    });


