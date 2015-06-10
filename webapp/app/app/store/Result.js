Ext.define('Dqt.store.Result', {
    extend: 'Ext.data.Store',
    requires: [
        'Dqt.model.Result'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Dqt.model.Result',
            proxy: {
                type: 'ajax',
                url: Ext.web.root+'/Sql/Execute',
                actionMethods: {
                    create : 'POST',
                    read   : 'POST',
                    update : 'POST',
                    destroy: 'POST'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data.result'
                }
            }
        }, cfg)]);
    }
});