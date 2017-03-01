angular.module('FCA').factory( 'whereUsedSvc', whereUsedSvc );

whereUsedSvc.$inject = [ '$http', '$q' ];

function whereUsedSvc( $http, $q ){

    var whereUsedSvcObj = function(){

    }

    return {
        whereUsedSvcObj: whereUsedSvcObj
    }

}