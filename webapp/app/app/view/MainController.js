Ext.define('Dqt.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'Dqt.view.SqlPanel'
    ],
    onBtnNewWindowClick: function(button, e, eOpts) {
        var sqlTabPanel = Ext.getCmp('sqlTabPanel'),
            tabsLength = sqlTabPanel.items.length;

        var sqlPanel = new Dqt.view.SqlPanel({id:'sqlpanel-'+tabsLength,title:'SQL Window'});
        sqlTabPanel.add(sqlPanel);
        sqlTabPanel.setActiveTab(sqlPanel.id);
    },

    onBtnQueryClick: function(button, e, eOpts) {
        Ext.getBody().mask("正在分析数据...", 'loading');
    }

});
