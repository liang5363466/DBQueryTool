Ext.define('Dqt.controller.Root', {
    extend: 'Ext.app.Controller',
    requires: [
        'Dqt.view.Main',
    ],
    onLaunch: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('温馨提示', '您的浏览器过于老旧，请更换浏览器再行重试！');
            return;
        }

        this.Main = new Dqt.view.Main({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this
            }
        });
    }
});
