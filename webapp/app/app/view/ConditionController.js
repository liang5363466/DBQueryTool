Ext.define('Dqt.view.ConditionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.condition',
    requires: [
        'Dqt.view.Result'
    ],
    onConditionActivate: function (component, eOpts) {
        this.view.down('textareafield').focus();
    },
    executeQuery: function () {
        this.view.down('panel').setHeight(150);

        var resultview = this.view.down('gridpanel') == null ? new Dqt.view.Result():this.view.down('gridpanel');
        resultview.getViewModel().set('sql',this.getViewModel().get('sql'));
        if(!this.view.down('gridpanel'))
        {
            this.view.add(resultview);
        }
        else
        {
            resultview.getController().loadResult();
        }
    }
});
