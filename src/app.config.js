routing.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider'];

export default function routing($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('index', {
            url: '',
            template: ''
        })
        .state('404', {
            url: '/404',
            template: '<page-not-found/>',
            params: {
                error: null
            }
        });

}