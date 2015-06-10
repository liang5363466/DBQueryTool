Ext.define('Dqt.view.ResultController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Dqt.store.Result'
    ],
    alias: 'controller.result',

    loadResult:function(){
        this.view.store = new Dqt.store.Result();
        Ext.getBody().mask("正在执行，请稍后...", 'loading');
        this.view.store.load({
            scope:this,
            params:{'sql': this.view.getViewModel().get('sql')},
            callback: function(records, operation, success) {
                Ext.getBody().unmask();
            }
        });
    },
    onResultAfterRender: function (view) {
        this.loadResult();
    }
});
