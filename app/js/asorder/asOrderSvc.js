angular.module('FCA').factory( 'asOrderSvc', asOrderSvc );

asOrderSvc.$inject = [ '$http', '$q' ];

function asOrderSvc( $http, $q ){

    var asOrderSvcObj = function(){

    }

    return {
        asOrderSvcObj: asOrderSvcObj
    }

}