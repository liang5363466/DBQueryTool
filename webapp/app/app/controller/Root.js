Ext.define('Dqt.controller.Root', {
    extend: 'Ext.app.Controller',
    requires: [
        'Dqt.view.Main',
    ],
    loadingText: 'Loading...',
    onLaunch: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Not Supported', 'This example is not supported on Internet Explorer 8. Please use a different browser.');
            return;
        }

    }
});
