angular.module('FCA').factory( 'whereUsedSvc', whereUsedSvc );

whereUsedSvc.$inject = [ '$http', '$q' ];

function whereUsedSvc( $http, $q ){

    var whereUsedSvcObj = function(){
        return $http.get('/config/enquiryTable.json');
    }

    return {
        whereUsedSvcObj: whereUsedSvcObj
    }

}