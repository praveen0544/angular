angular.module( 'FCA', [ 'ui.router', 'ngAnimate', 'ui.grid' ]);

angular.module( 'FCA' ).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('login', {
            name            : 'login',
            url             : '/',
            views: {
                'header@': {
                    templateUrl : '/views/loginHeader.html',
                    controller  : 'headerCtrl'
                },
                'content@': {
                    templateUrl : '/views/loginContent.html',
                    controller  : 'contentCtrl'
                },
                'footer@': {
                    templateUrl : '/views/loginFooter.html',
                    controller  : 'footerCtrl'
                }
            }
        })
        .state('home', {
            name            : 'home',
            url             : '/home',
            views: {
                'header': {
                    templateUrl : '/views/header.html',
                    controller  : 'headerCtrl'
                },
                'content': {
                    templateUrl : '/views/content.html',
                    controller  : 'contentCtrl'
                },
                'footer': {
                    templateUrl : '/views/footer.html',
                    controller  : 'footerCtrl'
                }
            }
        }).state('whereUsed', {
            name            : 'whereUsed',
            url             : '/whereUsed',
            views: {
                'header': {
                    templateUrl : '/views/header.html',
                    controller  : 'headerCtrl'
                },
                'content': {
                    templateUrl : '/views/whereUsed.html',
                    controller  : 'whereUsedCtrl',
                    controllerAs : 'vm'
                },
                'footer': {
                    templateUrl : '/views/footer.html',
                    controller  : 'footerCtrl'
                },
                'enquiry@':{
                    templateUrl: '/views/enquiry.html',
                    controller: 'enquiryConfigCtrl'
                }
            }
        }).state('asOrder', {
            name            : 'asOrder',
            url             : '/asOrder',
            views: {
                'header': {
                    templateUrl : '/views/header.html',
                    controller  : 'headerCtrl'
                },
                'content': {
                    templateUrl : '/views/asOrder.html',
                    controller  : 'asOrderCtrl'
                },
                'footer': {
                    templateUrl : '/views/footer.html',
                    controller  : 'footerCtrl'
                }
            }
        }).state('asOrder.submenu', {
            url : '/submenu1',
            views: {
                'submenu@asOrder': {
                    template : '<h1>Sub Menu</h1>'
                }
            }
        }).state('catalysticConvertor', {
            name            : 'catalysticConvertor',
            url             : '/catalysticConvertor',
            views: {
                'header': {
                    templateUrl : '/views/header.html',
                    controller  : 'headerCtrl'
                },
                'content': {
                    templateUrl : '/views/catalysticConvertor.html',
                    controller  : 'catalysticConvertorCtrl'
                },
                'footer': {
                    templateUrl : '/views/footer.html',
                    controller  : 'footerCtrl'
                }
            }
        }); 

        $urlRouterProvider.otherwise('/');
});

