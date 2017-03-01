angular.module( 'FCA', [ 'ngRoute' ]);

angular.module( 'FCA' ).config( function( $routeProvider ) {
    $routeProvider
        .when( "/", {
            templateUrl     : '/views/home.html',
            controller      : 'homeCtrl'
        })
        .when('/whereUsed', {
            templateUrl     : '/views/whereUsed.html',
            controller      : 'whereUsedCtrl'
        })
        .when('/asOrder', {
            templateUrl     : '/views/asOrder.html',
            controller      : 'asOrderCtrl'
        })
        .when('/catalysticConvertor', {
            templateUrl     : '/views/catalysticConvertor.html',
            controller      : 'catalysticConvertorCtrl'
        });
});