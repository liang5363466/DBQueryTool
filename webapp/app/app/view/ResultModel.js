Ext.define('Dqt.view.ResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.result',
    stores:{
        result:{
            model: 'Dqt.model.Result',
            proxy: {
                type: 'ajax',
                url: '/DBQueryTool/Sql/Execute',
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
        }

    }
});