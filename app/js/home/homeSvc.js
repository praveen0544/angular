angular.module('FCA').factory( 'homeSvc', homeSvc );

homeSvc.$inject = [ '$http', '$q' ];

function homeSvc( $http, $q ){

    var homeSvcObj = function(){

    }

    return {
        homeSvcObj: homeSvcObj
    }

}