angular.module('FCA').factory( 'whereUsedSvc', whereUsedSvc );

whereUsedSvc.$inject = [ '$http', '$q' ];

function whereUsedSvc( $http, $q ){

    var whereUsedSvcObj = function(){
        return $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json');
    }

    return {
        whereUsedSvcObj: whereUsedSvcObj
    }

}