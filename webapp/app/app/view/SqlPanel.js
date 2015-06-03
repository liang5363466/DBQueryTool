/*
 * File: app/view/SqlPanel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('app.view.SqlPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.sqlpanel',

    requires: [
        'app.view.SqlPanelViewModel',
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