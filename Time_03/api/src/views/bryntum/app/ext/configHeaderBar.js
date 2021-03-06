/*------------------------------
Setup da Barra de Titulo
--------------------------------*/
Ext.define('app.ext.configHeaderBar', {
    extend: 'app.ext.eventFilter',
    me: null,
    constructor: function (me) {
        if (me) {
            this.me = me
        }
        return {items : this.header(me)};
    },


    header: function (me) {
        var items = [
            {
                iconCls: 'fa fa-refresh', // 'icon-prev',
                tooltip: 'Reload',
                handler: function () {
                    location.reload();
                }
            },
            {
                iconCls: 'fa fa-search-plus', // 'icon-prev',
                tooltip: 'Zoom In',
                handler: function () {
                    me.zoomIn()
                }
            },
            {
                //xtype  : 'button',
                iconCls: 'fa fa-search-minus',
                tooltip: 'Zoom Out',
                width: null,
                handler: function () {
                    me.zoomOut();
                }
            },
            {
                    id: 'col-slider',
                    xtype: 'slider',
                    width: 60,
                    value: 90,
                    increment: 10,
                    minValue: 0,
                    maxValue: 200,
                    listeners: {
                        change: function (slider, value) {
                            me.setTimeColumnWidth(value);
                        },

                        changecomplete: function (slider, value) {
                            me.setTimeColumnWidth(value);
                        }
                    }
                },
            {
                //xtype  : 'button',
                iconCls: 'x-fa fa-arrow-left',
                tooltip: 'Shift Previous',
                handler: function () {
                    me.shiftPrevious();
                }
            },
            {
                //xtype  : 'button',
                iconCls: 'x-fa fa-arrow-right',
                tooltip: 'Shift Next',
                handler: function () {
                    me.shiftNext();
                }
            },
            {
                xtype: 'button',
                iconCls: 'x-fa fa-unlock',
                text: 'Unlocked',
                tooltip: 'Lock any edition',
                enableToggle: true,
                margin: '0 20',
                handler: function () {
                    me.setReadOnly(this.pressed);
                    this.setIconCls(this.pressed ? 'x-fa fa-lock' : 'x-fa fa-unlock');
                    this.setText(this.pressed ? 'Locked' : 'Unlocked');
                }
            },
            {
                xtype: 'taskFilterField',
                margin: '0 0',
                fieldLabel: 'Filtro',
                emptyText: 'Procurar...',
                store: 'MyPatients',
                property: 'Name'
            },
            {
                xtype   : 'button',
                text    : 'Add new task',
                handler : function () {
                    me.addTask(me.resourceStore.first());
                }
            }
        ];

        return items

    }

});
