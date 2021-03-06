/*
 * File: app/view/ctn_user_view.js
 *
 * This file was generated by Sencha Architect version 4.2.5.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('facturaElecWeb.view.ctn_user_view', {
    extend: 'Ext.Container',
    alias: 'widget.ctn_user_view',

    requires: [
        'facturaElecWeb.view.ctn_user_viewViewModel',
        'facturaElecWeb.view.ctn_user_viewViewController',
        'facturaElecWeb.view.grd_user',
        'Ext.field.Search',
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Button',
        'Ext.grid.Grid'
    ],

    controller: 'ctn_user_view',
    viewModel: {
        type: 'ctn_user_view'
    },
    id: 'ctn_user_view',
    displayed: true,
    layout: 'hbox',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'container',
            flex: 2.5,
            cls: 'borde-gestion-info',
            name: 'ctn_info_user',
            padding: '50 0 50 0',
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    flex: 0.5,
                    name: 'ctn_search_user',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'searchfield',
                            validators: function(value) {
                                if ((!Ext.isEmpty(value)) && (Ext.isEmpty(value.trim()))) {
                                    return "El campo correo no admite espacios";
                                }else if(value.length>100){
                                    return "El correo supera el tama??o permitido (100)";
                                }else if(!/^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/.test(value)){
                                    return "Correo invalido.(demo@demo.com)";
                                }else {
                                    return true;
                                }
                            },
                            itemId: 'search_field_user',
                            name: 'search_field_user',
                            width: '70%',
                            labelCls: 'my-text',
                            placeholder: 'Buscar por correo electronico',
                            listeners: {
                                keyup: 'onSearch_field_userKeyup'
                            }
                        }
                    ]
                },
                {
                    xtype: 'dataview',
                    id: 'data_view_user',
                    padding: '0 0 0 30',
                    itemTpl: [
                        '<div class="table-generic">',
                        '    <table>',
                        '',
                        '        <tbody >',
                        '            <tr>',
                        '',
                        '                <th class="row-generic">Nombre:</th>',
                        '',
                        '                <td class="row-generic">{firstname}</td>',
                        '',
                        '            </tr>',
                        '            <tr>',
                        '',
                        '                <th class="row-generic">Apellido:</th>',
                        '',
                        '                <td class="row-generic">{lastname}</td>',
                        '',
                        '            </tr>',
                        '            <tr>',
                        '',
                        '                <th class="row-generic">E-mail:</th>',
                        '',
                        '                <td class="row-generic">{email}</td>',
                        '',
                        '            </tr>',
                        '            <tr>',
                        '',
                        '                <th class="row-generic">Estado:</th>',
                        '',
                        '                <td class="row-generic">{active}</td>',
                        '',
                        '            </tr>',
                        '',
                        '            ',
                        '        </tbody>',
                        '    </table>',
                        '</div>'
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.8,
                    name: 'ctn_bottons_user',
                    padding: 5,
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                Ext.getCmp('ctn_user_view').fn_find_user(null);
                                Ext.getCmp('data_view_user').setStore('');
                                Ext.ComponentQuery.query('[itemId=search_field_user]')[0].setValue('');
                                Ext.getCmp('ctn_user_view').getViewModel().set('filtro',null);
                                Ext.getCmp('ctn_user_view').getViewModel().set('oldEmail',null);

                            },
                            cls: 'color-buttons',
                            height: 50,
                            id: 'btn_refresh_user',
                            ui: 'round',
                            width: 50,
                            margin: '0 5 0 0',
                            tooltip: 'Refrescar',
                            iconCls: 'x-fa fa-refresh'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var filter = Ext.getCmp('ctn_user_view').getViewModel().get('filtro');
                                if(filter != null){
                                    Ext.Msg.show({
                                        title: 'Confirmaci??n',
                                        message: "??Esta seguro de eliminar el usuario?",
                                        width: 300,
                                        closable: false,
                                        buttons: [{
                                            text: 'No',
                                            itemId: 'no'
                                        }, {
                                            text: 'Si',
                                            itemId: 'yes'
                                        }],
                                        multiline: false,
                                        fn: function (buttonValue, inputText, showConfig) {
                                            if(buttonValue === "yes"){


                                                Ext.Ajax.request({
                                                    url: 'sesionUsuario/eliminarUsuario?id='+filter,
                                                    method: 'GET',
                                                    success: function(response, opts) {
                                                        Ext.getCmp('ctn_user_view').fn_find_user(null);
                                                        Ext.getCmp('data_view_user').setStore('');
                                                        Ext.ComponentQuery.query('[itemId=search_field_user]')[0].setValue('');
                                                        Ext.getCmp('ctn_user_view').getViewModel().set('filtro',null);
                                                        Ext.getCmp('ctn_user_view').getViewModel().set('oldEmail',null);
                                                        var info =Ext.getCmp('ctn_statistics_view').getViewModel().get('filtro');
                                                        Ext.getCmp('ctn_statistics_view').fn_find_statistcs(info);
                                                        Ext.toast('Exito al eliminar', 1000);

                                                    },
                                                    failure: function(response, opts) {
                                                        Ext.toast('Error al llevar a cabo el proceso, comuniquese con el administrador', 1000);
                                                    }
                                                });
                                            }else{
                                                this.close();
                                            }
                                        },
                                        icon: Ext.Msg.QUESTION
                                    });


                                }else{
                                    Ext.toast('Seleccione un usuario', 1000);
                                }
                            },
                            cls: 'color-buttons',
                            height: 50,
                            name: 'btn_delete_user',
                            ui: 'round',
                            width: 50,
                            margin: '0 5 0 0',
                            tooltip: 'Eliminar usuario',
                            iconCls: 'x-fa fa-trash'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var filter = Ext.getCmp('ctn_user_view').getViewModel().get('filtro');
                                if(filter != null){
                                    var vtn = Ext.create('widget.vtn_generar_usuario',{
                                        title : '?? EDITAR USUARIO !'
                                    }).show();
                                    var store = Ext.getStore('store_gestion_usuarios');
                                    var record = store.findRecord('id', filter, 0, false, true, true);
                                    var form =Ext.getCmp('frmUser');
                                    form.setRecord(record);
                                    Ext.getCmp('cbx_roles_usuario').setValue(record.data.roles[0].role);
                                    Ext.getCmp('txt_password_usuario').setValue(null);

                                }else{
                                    Ext.toast('Seleccione un usuario', 1000);
                                }
                            },
                            cls: 'color-buttons',
                            height: 50,
                            name: 'btn_edit_user',
                            ui: 'round',
                            width: 50,
                            margin: '0 5 0 0',
                            tooltip: 'Editar usuario',
                            iconCls: 'x-fa fa-pencil-square-o'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var vtn = Ext.create('widget.vtn_generar_usuario',{
                                    title : '?? NUEVO USUARIO !'
                                }).show();
                            },
                            cls: 'color-buttons',
                            height: 50,
                            name: 'btn_add_user',
                            ui: 'round',
                            width: 50,
                            tooltip: 'Crear un nuevo usuario',
                            iconCls: 'x-fa fa-plus'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 4.5,
            name: 'ctn_grid_user',
            padding: '30 30 0 30',
            items: [
                {
                    xtype: 'container',
                    height: '100%',
                    name: 'ctn_grid_medium_ user',
                    width: '100%',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            height: '70%',
                            name: 'ctn_grid_internal_user',
                            width: '100%',
                            items: [
                                {
                                    xtype: 'grd_user'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        initialize: {
            fn: 'onContainerInitialize',
            scope: 'controller'
        }
    },

    onSearch_field_userKeyup: function(textfield, e, eOpts) {
        var filter= textfield.getValue();
        if (e.event.keyCode == 13){
            Ext.getCmp('ctn_user_view').fn_find_client(filter);
            Ext.getCmp('data_view_user').setStore('store_gestion_cliente');
            Ext.getCmp('ctn_user_view').getViewModel().set('filtro',filter);
            Ext.getCmp('ctn_user_view').getViewModel().set('oldEmail',filter);

        }
        if(!textfield.getValue()){
            Ext.getCmp('ctn_user_view').fn_find_user(null);
            Ext.getCmp('data_view_user').setStore('');
            Ext.ComponentQuery.query('[itemId=search_field_user]')[0].setValue('');
            Ext.getCmp('ctn_user_view').getViewModel().set('filtro',null);
            Ext.getCmp('ctn_user_view').getViewModel().set('oldEmail',null);


        }
    },

    fn_find_user: function(filter) {
        var storeUser = Ext.getStore('store_gestion_usuarios');
        storeUser.proxy.extraParams ={
            filtro : filter
        };


        storeUser.load({
            params:{
                filtro:filter
            },
            callback: function(records, operation, success) {
                if(success){
                    var noAlmacenado=false;
                    var total = storeUser.totalCount;
                    if(total === 0){
                        // Ext.getCmp('ctn_client_view').fn_find_client(null);
                        Ext.getCmp('data_view_user').setStore('');
                        Ext.ComponentQuery.query('[itemId=search_field_user]')[0].setValue('');
                        Ext.getCmp('ctn_user_view').getViewModel().set('filtro',null);
                        Ext.getCmp('ctn_user_view').getViewModel().set('oldEmail',null);
                        Ext.toast('No hay resultados para la b??squeda',1000);
                    }

                }
            }
        });
    }

});