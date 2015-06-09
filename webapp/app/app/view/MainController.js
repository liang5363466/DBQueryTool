Ext.define('Dqt.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'Dqt.view.SqlQuery'
    ],
    onBtnNewWindowClick: function(button, e, eOpts) {
        var sqlTabPanel = Ext.getCmp('sqlTabPanel'),
            tabsLength = sqlTabPanel.items.length;

        var sqlPanel = new Dqt.view.SqlQuery({id:'sqlpanel-'+tabsLength,title:'SQL Window'});
        sqlTabPanel.add(sqlPanel);
        sqlTabPanel.setActiveTab(sqlPanel.id);
    },

    onBtnQueryClick: function(button, e, eOpts) {
        var sqlTabPanel = Ext.getCmp('sqlTabPanel');
        sqlTabPanel.getActiveTab().getController().executeQuery();
    }
});
