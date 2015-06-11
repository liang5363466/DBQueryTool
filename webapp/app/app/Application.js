Ext.define('Dqt.Application', {
    extend: 'Ext.app.Application',
    name: 'Dqt',
    controllers: [
        'Root'
    ],
    models:[
        'Dqt.model.Result'
    ],
    launch: function () {

    }
});
