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

    .controller("DatosController",function ($scope,localStorageService, $location) {

        $scope.mensaje ={};
        $scope.usuarioActivo = localStorageService.get("local.usuarioActivo");
        if(localStorageService.get("local.usuarios")){
            $scope.usuarios =  localStorageService.get("local.usuarios");
        }else{
            $scope.usuarios = [];
        }
        if(localStorageService.get("local.rides")){
            $scope.rides =  localStorageService.get("local.rides");
        }

        //cerrar Sesion
        $scope.cerrarSesion = function () {
            localStorageService.remove("local.usuarioActivo");
            $scope.usuarioActivo= undefined;
            $scope.usuarioNuevo= undefined;
            $location.path("/");
        }

       //validar registro
        $scope.validarRegistro = function () {
            //verifica si existe numero o usuario
            for (i = 0; i < $scope.usuarios.length; i++) {
                if ($scope.usuarioNuevo.telefono == $scope.usuarios[i].telefono) {
                    //el numero ya existe
                    $scope.mensaje.telefono = "El número telefónico ya fue Registrado!";
                    console.log("existe numero");
                    $scope.usuarioNuevo = {};
                    return false;
                }
                if ($scope.usuarioNuevo.usuario == $scope.usuarios[i].usuario) {
                    // el nombre de usuario ya existe
                     $scope.mensaje.usuario = "El usuario ya Existe!";
                    console.log("existe usuario");
                    $scope.usuarioNuevo = {};
                    return false;
                }
            }
            //verifica las contraseñas
            if ($scope.usuarioNuevo.contrasena == $scope.contra) {
                $scope.usuarios.push($scope.usuarioNuevo);
                $scope.usuarioNuevo = {};
                localStorageService.set("local.usuarios",$scope.usuarios);
                $location.path('/inicio');
                console.log("registrado");
                //registrado abre login

            } else {
                //las contraseñas no son la misma
                $scope.mensaje.contra = "Contraseñas Diferentes!!";
                console.log("contraseas diferents");
            }
        }
        //validar login
        $scope.validarLogin = function () {
            $scope.mensaje = {};
            for (i = 0; i < $scope.usuarios.length; i++) {
                if ($scope.usuarioNuevo.usuario == $scope.usuarios[i].usuario) {

                    if ($scope.usuarioNuevo.contrasena == $scope.usuarios[i].contrasena){
                        $scope.usuarioActivo =  $scope.usuarios[i];
                        $scope.usuarioActivo.id = i;
                        localStorageService.set("local.usuarioActivo",$scope.usuarios[i]);
                        $location.path('/dashboard');
                         return true;
                } else {
                    console.log("La contraseña no es correcta!");
                        $scope.mensaje.contra = "Contraseña Incorrecta!!";
                        return false;
                }
            }
        }
             console.log("No existe el usuario");
            $scope.mensaje.usuario = "El usuario No Existe!";
        return false;
        }


    }).controller("DashboardController",function ($scope,localStorageService, $location) {
        if (localStorageService.get("local.usuarioActivo")){
            $scope.usuarioActivo = localStorageService.get("local.usuarioActivo");
            if(localStorageService.get("local.usuarios")){
                $scope.usuarios =  localStorageService.get("local.usuarios");
            }
            $scope.usuarios = localStorageService.get("local.usuarios");
            if(localStorageService.get("local.rides")){
                $scope.rides =  localStorageService.get("local.rides");
            }else{
                $scope.rides = [];
            }
            if($scope.usuarioActivo.rides){
            }else{
                $scope.usuarioActivo.rides = [];
            }

            //guardar ride
            $scope.guardarRide = function () {

                for (i = 0; i < $scope.usuarioActivo.rides.length; i++) {
                    if($scope.usuarioActivo.rides[i].nombre == $scope.rideNuevo.nombre ){
                        $scope.mensaje.nombre = "Ya tiene un ride con este nombre!!";
                        console.log("existe nombre");
                        return false;
                    }
                }
                $scope.rideNuevo.usuario = $scope.usuarioActivo.usuario;
                $scope.usuarioActivo.rides.push($scope.rideNuevo);
                localStorageService.set("local.usuarioActivo",$scope.usuarioActivo);
                $scope.usuarios[$scope.usuarioActivo.id] = $scope.usuarioActivo; //actualiza usuario en usuarios
                localStorageService.set("local.usuarios",$scope.usuarios);
                $scope.rides.push($scope.rideNuevo);
                localStorageService.set("local.rides",$scope.rides);
                alert("Gracias por tu Ride!!");
                console.log("guardado");
            }

            //editar perfil
            $scope.editarPerfil = function () {

                for (i = 0; i < $scope.usuarios.length; i++) {
                    if($scope.usuarioNuevo.telefono != $scope.usuarioActivo.telefono && $scope.usuarioNuevo.usuario != $scope.usuarioActivo.usuario){
                    if ($scope.usuarioNuevo.telefono == $scope.usuarios[i].telefono) {
                        //el numero ya existe
                            $scope.mensaje.telefono = "Este número ya Existe!!";
                            $scope.usuarioNuevo = {};
                            return false;

                    }
                    if ($scope.usuarioNuevo.usuario == $scope.usuarios[i].usuario) {
                        // el nombre de usuario ya existe
                        $scope.mensaje.usuario = "Este usuario ya Existe!!";
                        console.log("existe usuario");
                        $scope.usuarioNuevo = {};
                        return false;
                    }}}

                //verifica las contraseñas
                if ($scope.usuarioNuevo.contrasena == $scope.contra) {
                    $scope.usuarios[$scope.usuarioActivo.id] = $scope.usuarioNuevo;
                    $scope.usuarioNuevo.id = $scope.usuarioActivo.id;
                    $scope.usuarioActivo = $scope.usuarioNuevo;
                    $scope.usuarioNuevo = {};
                    localStorageService.set("local.usuarios",$scope.usuarios);
                    localStorageService.set("local.usuarioActivo",$scope.usuarioActivo);
                    alert("Cambios Listos!!");
                    console.log("editado");
                    //registrado abre login

                } else {
                    //las contraseñas no son la misma
                    $scope.mensaje.contra = "Contraseñas Diferentes!!";
                    console.log("contraseas diferents");

                }
            }

            $scope.eliminarRide = function (nombre) {
                for (i = 0; i < $scope.usuarioActivo.rides.length; i++) {
                    if(){

                    }
                }
            }

        } else {
            $location.path("/");
        }
    });//Controller