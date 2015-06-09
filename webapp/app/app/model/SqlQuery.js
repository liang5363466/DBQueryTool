Ext.define('Dqt.model.SqlQuery', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.field.Field'
    ],
    fields: [
        {name: 'result'},
        {name: 'duration'}
    ]
});