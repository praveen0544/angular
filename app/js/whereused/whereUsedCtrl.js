angular.module('FCA').controller( 'whereUsedCtrl', whereUsedCtrl );

whereUsedCtrl.$inject = [ '$scope', 'whereUsedSvc', 'enquiryConfigSvc', 'uiGridConstants', 'uiGridGroupingConstants' ];

function whereUsedCtrl( $scope, whereUsedSvc, enquiryConfigSvc, uiGridConstants, uiGridGroupingConstants ){
    var vm = this;
    vm.gridData = [];
    vm.configData = [];
    vm.formJson = {};

    var columnDefs = [
        { name: 'MY' },
        { name: 'PCS Type'},
        { name: 'Plt' },
		{ name: 'Fam' },
		{ name: 'Line' },
		{ name: 'Series' },
		{ name: 'Body Style' },
		{ name: 'Mkt' },
		{ name: 'Rel' },
		{ name: 'Part' },
		{ name: 'Desc' },
		{ name: 'NDS String' },
		{ name: 'Usage' },
		{ name: 'UoM' },
		{ name: 'Line Up' },
		{ name: 'UPG' },
		{ name: 'VSC' },
		{ name: 'Logon' },
		{ name: 'Add Date' }
    ];

    // vm.gridOptions = {
    //     data: vm.gridData
    // };

    vm.gridOptions = {
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        enableGroupHeaderSelection: false,
        rowHeight: 35,
        showGridFooter:true,
        columnDefs: columnDefs,
        data: vm.gridData
    };

    enquiryConfigSvc.enquiryConfigSvcObj().then(function(response){
        vm.configData = response.data;
    });

    vm.populateTableData = function(){
        whereUsedSvc.whereUsedSvcObj().then(function(response){
            vm.gridOptions = {
                columnDefs: columnDefs,
                data: response.data
            };
        });
    };

    vm.enquiryForm = function(enquiryType){
        console.log(enquiryType);   // Enquiry type
        console.log(vm.formJson); // Enquiry Form Data
        vm.populateTableData();
    };

    console.log(vm);

    return vm;

}