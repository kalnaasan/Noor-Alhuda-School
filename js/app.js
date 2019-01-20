(function () {
    angular
        .module('noorAlhudaSchool', ['ngRoute'])
        .config(configRouter);

    function configRouter($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .otherwise({
                redirect: '/home'
            });
            $locationProvider.html5Mode(true)
    }
})();