Ext.define('Dqt.view.SqlPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sqlpanel',

    onSqlPanelActivate: function(component, eOpts) {
        this.view.down('textareafield').focus();
    }
});
