Ext.define('Dqt.view.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Dqt.view.MainModel',
        'Dqt.view.MainController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.tab.Panel'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    itemId: 'main',
    layout: 'border',

    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            height: 30,
            itemId: 'TopToolBar',
            items: [
                {
                    xtype: 'button',
                    itemId: 'btnNewWindow',
                    text: 'New Window',
                    listeners: {
                        click: 'onBtnNewWindowClick'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'btnQuery',
                    text: 'Query',
                    listeners: {
                        click: 'onBtnQueryClick'
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            region: 'center',
            id: 'sqlTabPanel',
            itemId: 'SqlTabPanel',
            header: false,
            manageHeight: false,
            removePanelHeader: false
        }
    ]

});