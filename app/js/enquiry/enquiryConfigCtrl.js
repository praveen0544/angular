angular.module('FCA').controller( 'enquiryConfigCtrl', enquiryConfigCtrl );

enquiryConfigCtrl.$inject = [ '$scope', 'enquiryConfigSvc' ];

function enquiryConfigCtrl( $scope, enquiryConfigSvc ){
    
    var vm = this;
    vm.data = [];

    console.log(enquiryConfigSvc.enquiryConfigSvcObj());

    enquiryConfigSvc.enquiryConfigSvcObj().then(function(response){
        vm.data = response.data;
    });

    return vm;
}