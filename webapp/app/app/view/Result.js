Ext.define('Dqt.view.Result', {
    extend: 'Ext.grid.Panel',
    alias: 'view.result',
    requires: [
        'Dqt.view.ResultModel',
        'Dqt.view.ResultController',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table'
    ],
    controller: 'result',
    viewModel: {
        type: 'result'
    },
    region: 'center',
    title: 'Query Result',
    listeners:{
        afterrender:'onResultAfterRender'
    },
    columns: [
        {header: 'STAT_ID',  dataIndex: 'STAT_ID',flex:1}
    ]
});