angular.module('FCA').controller( 'whereUsedCtrl', whereUsedCtrl );

whereUsedCtrl.$inject = [ '$scope', 'whereUsedSvc', 'uiGridConstants' ];

function whereUsedCtrl( $scope, whereUsedSvc, uiGridConstants ){
    var vm = this;
    vm.gridData = [];

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

    whereUsedSvc.whereUsedSvcObj().then(function(response){
        //vm.gridOptions.columnDefs = columnDefs;
       // vm.gridOptions.data = response.data;
        vm.gridOptions = {
            enableRowSelection: true,
            enableSelectAll: true,
            selectionRowHeaderWidth: 35,
            enableGroupHeaderSelection: false,
            rowHeight: 35,
            showGridFooter:true,
            columnDefs: columnDefs,
            data: response.data
        };
    });

    return vm;

}