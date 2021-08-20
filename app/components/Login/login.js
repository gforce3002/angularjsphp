myApp
    .controller('LoginCtrl',["$scope", LoginCtrl]);

    function LoginCtrl($scope){
        var obj = $scope;
        
        obj.btnLoggin = ()=>{
            alert("Funciona el controlador")
        }
    }

    //https://www.youtube.com/watch?v=aL95O4ruun0
    //https://www.youtube.com/watch?v=DHqHynuLXRE&list=PLYxzS__5yYQmX2bItSRCqwiQZn5dIL1gt&index=16