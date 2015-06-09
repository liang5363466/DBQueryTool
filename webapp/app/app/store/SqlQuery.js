Ext.define('Dqt.store.SqlQuery', {
    extend: 'Ext.data.Store',
    requires: [
        'Dqt.model.SqlQuery'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Dqt.model.SqlQuery',
            proxy: {
                type: 'ajax',
                api: {
                    read:Ext.web.root+'/Sql/Execute'
                },
                url: Ext.web.root+'/Sql/Execute',
                actionMethods: {
                    create : 'POST',
                    read   : 'POST',
                    update : 'POST',
                    destroy: 'POST'
                }
            }
        }, cfg)]);
    }
});