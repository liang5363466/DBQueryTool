Ext.define('Dqt.view.SqlQuery', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Dqt.view.SqlQueryModel',
        'Dqt.view.SqlQueryController',
        'Ext.form.field.TextArea',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table'
    ],
    controller: 'sqlquery',

    viewModel: {
        type: 'sqlquery'
    },
    layout: 'border',
    closable: true,
    header: false,
    listeners: {
        activate: 'onSqlQueryActivate',
        afterrender:'onSqlQueryActivate'
    },
    items: [
        {
            xtype: 'panel',
            region: 'north',
            split: true,
            height: 150,
            itemId: 'TextPanel',
            dockedItems: [
                {
                    xtype: 'textareafield',
                    dock: 'top',
                    height: '100%',
                    fieldLabel: 'Label',
                    bind:{
                        value:'{sql}'
                    },
                    hideLabel: true
                }
            ]
        },
        {
            xtype: 'gridpanel',
            region: 'center',
            itemId: 'ResultPanel',
            title: 'Query Result',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'String'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'number',
                    text: 'Number'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'date',
                    text: 'Date'
                },
                {
                    xtype: 'booleancolumn',
                    dataIndex: 'bool',
                    text: 'Boolean'
                }
            ]
        }
    ]

});