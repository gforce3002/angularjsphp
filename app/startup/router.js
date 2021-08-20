
myApp
.run(function($rootScope, $state){
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
        console.log(error);
    });
    $rootScope.$on('$stateChangeStart', function (next, current) {
        console.log(next, current)
    });
    $rootScope.$on('$stateChangeSuccess', function (next, current) {
        console.log(next, current)
    });
})
.config(["$stateProvider",'$locationProvider','$urlRouterProvider',function($stateProvider,$locationProvider,$urlRouterProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('login',{
            url:'/',
            templateUrl: 'app/components/Login/login.html',
            controller: "LoginCtrl"
        })
        .state('hello',{
            url:'/hello',
            template: '<h3>hello world!</h3>'
        })
        .state('about',{
            url:'/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        })

}])