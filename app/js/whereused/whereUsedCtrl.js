angular.module('FCA').controller( 'whereUsedCtrl', whereUsedCtrl );

whereUsedCtrl.$inject = [ '$scope', 'whereUsedSvc' ];

function whereUsedCtrl( $scope, whereUsedSvc ){
    var vm = this;
    vm.gridData = [];

    vm.gridOptions = {
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        enableGroupHeaderSelection: false,
        rowHeight: 35,
        showGridFooter:true
    };

    var columnDefs = [
        { name: 'id' },
        { name: 'name'},
        { name: 'address.city' }
    ];

    vm.gridOptions = {
        data: vm.gridData
    };

    whereUsedSvc.whereUsedSvcObj().then(function(response){
        vm.gridOptions.columnDefs = columnDefs;
        vm.gridOptions.data = response.data;
    });

    return vm;

}