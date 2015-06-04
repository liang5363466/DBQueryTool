Ext.define('Dqt.view.SqlPanel', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Dqt.view.SqlPanelModel',
        'Ext.form.field.TextArea',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table'
    ],

    viewModel: {
        type: 'sqlpanel'
    },
    layout: 'border',
    closable: true,
    header: false,

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