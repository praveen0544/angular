angular.module('FCA').factory( 'enquiryConfigSvc', enquiryConfigSvc );

enquiryConfigSvc.$inject = [ '$http', '$q' ];

function enquiryConfigSvc( $http, $q ){

    var enquiryConfigSvcObj = function(){
        return $http.get('/config/enquiryConfig.json');
    }

    return {
        enquiryConfigSvcObj: enquiryConfigSvcObj
    }

}