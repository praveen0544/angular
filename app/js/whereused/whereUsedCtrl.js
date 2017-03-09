angular.module('FCA').controller( 'whereUsedCtrl', whereUsedCtrl );

whereUsedCtrl.$inject = [ '$scope', 'whereUsedSvc', 'enquiryConfigSvc', 'uiGridConstants', 'uiGridGroupingConstants' ];

function whereUsedCtrl( $scope, whereUsedSvc, enquiryConfigSvc, uiGridConstants, uiGridGroupingConstants ){
    var vm = this;
    vm.gridData = [];
    vm.configData = [];
    vm.formJson = {};
    vm.gridApi = [];
    vm.updatedRow = [];

    var columnDefs = [
        { name: 'MY'},
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

    vm.populateTableData = function(data){

        var options = {
            method: 'POST',
            data: data
        };

        whereUsedSvc.whereUsedSvcObj(options).then(function(response){
            vm.gridOptions = {
                columnDefs: columnDefs,
                data: response.data
            };
        });
    };


    vm.gridOptions.onRegisterApi = function(gridApi){
        console.log('here');
        console.log(gridApi);

        vm.gridApi = gridApi;

        gridApi.selection.on.rowSelectionChanged($scope, function(row){
            var msg = 'row selected ' + row.isSelected;
            console.log(row);
        });

        gridApi.selection.on.rowSelectionChangedBatch($scope, function(rows){
            var msg = 'rows changed ' + rows.length;
            console.log(rows);  
        });

        gridApi.edit.on.afterCellEdit($scope, function( rowEntity, colDef, newValue, oldValue ){
            vm.lastCellEdited = ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
            console.log(vm.lastCellEdited);
            vm.updatedRow.push(rowEntity);
            vm.enquiryFormEdit(rowEntity);
        });

    };


    //Enquiry Form Extract and Inquiry
    vm.enquiryForm = function(enquiryType){
        console.log(enquiryType);   // Enquiry type
        console.log(vm.formJson); // Enquiry Form Data
        vm.populateTableData(vm.formJson);
    };


    vm.enquiryFormUpdate = function(type){
        console.log(type);
        console.log(vm.gridApi);
        vm.updateSelectData();
    };

    vm.updateSelectData = function(){
        
    }

    vm.enquiryFormEdit = function(updatedRow){
        console.log(updatedRow);
        vm.updateSelectEdit(updatedRow);
    };

    vm.updateSelectEdit = function(updatedRow){
        
    }
    


    return vm;

}