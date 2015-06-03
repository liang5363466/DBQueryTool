{
    "xdsVersion": "3.2.0",
    "frameworkVersion": "ext51",
    "internals": {
        "type": "Ext.panel.Panel",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "closable": true,
            "designer|userAlias": "sqlpanel",
            "designer|userClassName": "SqlPanel",
            "header": false,
            "itemId": null,
            "layout": "border",
            "title": null
        },
        "name": "MyPanel2",
        "cn": [
            {
                "type": "Ext.panel.Panel",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "dock": null,
                    "height": 150,
                    "itemId": "TextPanel",
                    "layout|region": "north",
                    "layout|split": true,
                    "minHeight": null,
                    "title": null
                },
                "name": "MyPanel",
                "cn": [
                    {
                        "type": "Ext.form.field.TextArea",
                        "reference": {
                            "name": "dockedItems",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "dock": "top",
                            "fieldLabel": "Label",
                            "height": "100%",
                            "hideLabel": true,
                            "resizable": null
                        },
                        "name": "MyTextArea"
                    }
                ]
            },
            {
                "type": "Ext.grid.Panel",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "dock": null,
                    "itemId": "ResultPanel",
                    "layout|flex": null,
                    "layout|region": "center",
                    "maxHeight": null,
                    "minHeight": null,
                    "title": "Query Result"
                },
                "name": "MyGridPanel",
                "cn": [
                    {
                        "type": "Ext.grid.column.Column",
                        "reference": {
                            "name": "columns",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "dataIndex": "string",
                            "text": "String"
                        },
                        "name": "MyColumn"
                    },
                    {
                        "type": "Ext.grid.column.Number",
                        "reference": {
                            "name": "columns",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "dataIndex": "number",
                            "text": "Number"
                        },
                        "name": "MyNumberColumn"
                    },
                    {
                        "type": "Ext.grid.column.Date",
                        "reference": {
                            "name": "columns",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "dataIndex": "date",
                            "text": "Date"
                        },
                        "name": "MyDateColumn"
                    },
                    {
                        "type": "Ext.grid.column.Boolean",
                        "reference": {
                            "name": "columns",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "dataIndex": "bool",
                            "text": "Boolean"
                        },
                        "name": "MyBooleanColumn"
                    },
                    {
                        "type": "Ext.view.Table",
                        "reference": {
                            "name": "viewConfig",
                            "type": "object"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "width": null
                        },
                        "name": "MyTable"
                    }
                ]
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {},
    "viewController": {
        "xdsVersion": "3.2.0",
        "frameworkVersion": "ext51",
        "internals": {
            "type": "Ext.app.ViewController",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "designer|userClassName": "SqlPanelViewController"
            },
            "name": "MyPanel2ViewController"
        },
        "linkedNodes": {},
        "boundStores": {},
        "boundModels": {}
    },
    "viewModel": {
        "xdsVersion": "3.2.0",
        "frameworkVersion": "ext51",
        "internals": {
            "type": "Ext.app.ViewModel",
            "reference": {
                "name": "items",
                "type": "array"
            },
            "codeClass": null,
            "userConfig": {
                "designer|userAlias": "sqlpanel",
                "designer|userClassName": "SqlPanelViewModel"
            },
            "name": "MyPanel2ViewModel"
        },
        "linkedNodes": {},
        "boundStores": {},
        "boundModels": {}
    }
}