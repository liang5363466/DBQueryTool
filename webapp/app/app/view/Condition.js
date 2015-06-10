Ext.define('Dqt.view.Condition', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Dqt.view.ConditionModel',
        'Dqt.view.ConditionController',
        'Ext.form.field.TextArea',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table'
    ],
    controller: 'condition',
    viewModel: {
        type: 'condition'
    },
    layout: 'border',
    closable: true,
    header: false,
    listeners: {
        activate: 'onConditionActivate',
        afterrender:'onConditionActivate'
    },
    items: [
        {
            xtype: 'panel',
            region: 'north',
            split: true,
            height: '100%',
            layout:'border',
            dockedItems: [
                {
                    xtype: 'textareafield',
                    region: 'center',
                    height: '100%',
                    bind:{
                        value:'{sql}'
                    },
                    hideLabel: true
                }
            ]
        }
    ]

});