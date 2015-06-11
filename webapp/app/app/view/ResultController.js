Ext.define('Dqt.view.ResultController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.result',
    loadResult:function(){

       var gridView = this.view,
           resultStore = this.view.getViewModel().getStore('result');
       gridView.headerCt.removeAll();
       Ext.getBody().mask("正在执行，请稍后...", 'loading');
       resultStore.load({
           params: {'sql': this.view.getViewModel().get('sql')},
           callback: function(records, operation, success) {
               Ext.getBody().unmask();
               if(records.length > 0)
               {
                   for(var colName in records[0].data)
                   {
                       if(records[0].id == records[0].data[colName])continue;
                       resultStore.getModel().addFields(colName);
                       var column = Ext.create('Ext.grid.column.Column', {text: colName,dataIndex:colName});
                       gridView.headerCt.insert(0,column);
                       gridView.getView().refresh();
                   }

               }

           }
       });
    },
    onResultAfterRender: function (view) {
        this.loadResult();
    }
});
