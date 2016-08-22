angular.module("App",["ngRoute","LocalStorageModule"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl:"pages/inicio.html"
        })
            .when("/dashboard",{
                templateUrl:"pages/dashboard.html"
            })
            .otherwise({
                redirectTo:"/"
            });
    })

    .controller("DatosController",function ($scope,localStorageService) {


        if(localStorageService.get("local.usuarios")){
            $scope.usuarios =  localStorageService.get("local.usuarios");
        }else{
            $scope.usuarios = [];
        }
        if(localStorageService.get("local.rides")){
            $scope.usuarios =  localStorageService.get("local.rides");
        }else{
            $scope.rides = [];
        }

        $scope.$watchCollection("usuarios",function (nuevValor,viejoValor) {
            localStorageService.set("local.usuarios",$scope.usuarios);
        });



        $scope.validar = function () {
            //verifica si existe numero o usuario
            for (i = 0; i < $scope.usuarios.length; i++) {
                if ($scope.usuarioNuevo.telefono == $scope.usuarios[i].telefono) {
                    //el numero ya existe
                    console.log("existe numero");
                    $scope.usuarioNuevo = [];
                    return false;
                }
                if ($scope.usuarioNuevo.usuario == $scope.usuarios[i].usuario) {
                    // el nombre de usuario ya existe
                    console.log("existe usuario");
                    $scope.usuarioNuevo = [];
                    return false;
                }
            }
            //verifica las contraseñas
            if ($scope.usuarioNuevo.contrasena == $scope.contra) {
                $scope.usuarios.push($scope.usuarioNuevo);
                $scope.usuarioNuevo = {};
                console.log("registrado");
                //registrado abre login

            } else {
                //las contraseñas no son la misma
                console.log("contraseas diferents");
            }
        }


    });//Controller