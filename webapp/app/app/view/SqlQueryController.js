Ext.define('Dqt.view.SqlQueryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sqlquery',
    requires: [
        'Dqt.store.SqlQuery'
    ],
    onSqlQueryActivate: function (component, eOpts) {
        this.view.down('textareafield').focus();
    },
    executeQuery: function () {
        var store = new Dqt.store.SqlQuery();

    }
});
