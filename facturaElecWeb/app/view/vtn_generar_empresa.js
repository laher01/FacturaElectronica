/*
 * File: app/view/vtn_generar_empresa.js
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

Ext.define('facturaElecWeb.view.vtn_generar_empresa', {
    extend: 'Ext.Dialog',
    alias: 'widget.vtn_generar_empresa',

    requires: [
        'facturaElecWeb.view.vtn_generar_productoViewModel2',
        'Ext.form.Panel',
        'Ext.Img',
        'Ext.field.Text',
        'Ext.Button'
    ],

    viewModel: {
        type: 'vtn_generar_empresa'
    },
    height: '90%',
    id: 'vtn_generar_empresa',
    itemId: 'vtn_generar_empresa',
    name: 'vtn_generar_empresa',
    width: '60%',
    displayed: true,
    layout: 'center',
    closable: true,
    closeToolText: 'Cerrar',
    titleAlign: 'center',

    items: [
        {
            xtype: 'formpanel',
            id: 'frm_empresas',
            width: '100%',
            items: [
                {
                    xtype: 'container',
                    name: 'ctn_image_company',
                    margin: '-7 0 10 0',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'image',
                            cls: 'image-generic-frm',
                            name: 'image_frm_company',
                            src: 'https://image.flaticon.com/icons/svg/31/31495.svg'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    name: 'ctn_frm_company',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'container',
                            name: 'ctn_column_left_company',
                            width: '50%',
                            margin: '0 10 0 0',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        var store= Ext.getStore('store_gestion_empresa');
                                        var Existente=false;
                                        var idCompany=null;
                                        var idForm=Ext.getCmp('frm_empresas').getRecord()?Ext.getCmp('frm_empresas').getRecord().id :null;
                                        store.each(function(record){
                                            if(value == record.data.nit){
                                                Existente=true;
                                                idCompany=record.id;
                                            }
                                        });

                                        if ((!Ext.isEmpty(value)) && (Ext.isEmpty(value.trim()))) {
                                            return "El campo nit no admite espacios";
                                        }else if(value.length>50){
                                            return "El numero de nit supera el tama??o permitido (50)";
                                        }else if(!/^([0-9])*$/.test(value)){
                                            return "El nit debe ser  un n??mero entero";
                                        }else if(Existente && idCompany!=idForm){
                                            return "Ya existe una empresa con este nit";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'nit',
                                    width: '100%',
                                    label: 'NIT',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite un NIT'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        if(value.length>100){
                                            return "La campo ciudad supera el tama??o permitido (100)";
                                        }else if(/^([0-9])*$/.test(value)){
                                            return "El campo ciudad tiene caracteres invalidos.(0-9)";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'ciudad',
                                    width: '100%',
                                    label: 'Ciudad',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite una ciudad'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        var store= Ext.getStore('store_gestion_empresa');
                                        var Existente=false;
                                        var idCompany=null;
                                        var idForm=Ext.getCmp('frm_empresas').getRecord()?Ext.getCmp('frm_empresas').getRecord().id :null;
                                        store.each(function(record){
                                            if(value == record.data.telefono){
                                                Existente=true;
                                                idCompany=record.id;
                                            }
                                        });

                                        if ((!Ext.isEmpty(value)) && (Ext.isEmpty(value.trim()))) {
                                            return "El campo telefono no admite espacios";
                                        }else if(value.length>20){
                                            return "El numero de telefono supera el tama??o permitido (20)";
                                        }else if(!/^([0-9])*$/.test(value)){
                                            return "El telefono debe ser  un n??mero entero";
                                        }else if(Existente && idCompany!=idForm){
                                            return "Ya existe una empresa con este telefono";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'telefono',
                                    width: '100%',
                                    label: 'Telefono',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite un telefono'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            name: 'ctn_column_rigth_company',
                            width: '50%',
                            margin: '0 0 0 10',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        if(value.length>100){
                                            return "El nombre supera el tama??o permitido (100)";
                                        }else if(/^([0-9])*$/.test(value)){
                                            return "El nombre tiene caracteres invalidos.(0-9)";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'nombre',
                                    width: '100%',
                                    label: 'Nombre',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite un nombre'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        if(value.length>100){
                                            return "La dirreci??n supera el tama??o permitido (100)";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'direccion',
                                    width: '100%',
                                    label: 'Direcci??n',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite una direcci??n'
                                },
                                {
                                    xtype: 'textfield',
                                    validators: function(value) {
                                        var store= Ext.getStore('store_gestion_empresa');
                                        var Existente=false;
                                        var idCompany=null;
                                        var idForm=Ext.getCmp('frm_empresas').getRecord()?Ext.getCmp('frm_empresas').getRecord().id :null;
                                        store.each(function(record){
                                            if(value == record.data.email){
                                                Existente=true;
                                                idCompany=record.id;
                                            }
                                        });

                                        if ((!Ext.isEmpty(value)) && (Ext.isEmpty(value.trim()))) {
                                            return "El campo correo no admite espacios";
                                        }else if(value.length>100){
                                            return "El correo supera el tama??o permitido (100)";
                                        }else if(!/^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/.test(value)){
                                            return "Correo invalido.(demo@demo.com)";
                                        }else if(Existente && idCompany!=idForm){
                                            return "Ya existe un cliente con este correo";
                                        }else{
                                            return true;
                                        }
                                    },
                                    name: 'email',
                                    width: '100%',
                                    label: 'Correo',
                                    labelCls: 'my-text',
                                    required: true,
                                    requiredMessage: 'Digite un e-mail'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    hidden: true,
                    name: 'id',
                    label: 'Field'
                },
                {
                    xtype: 'container',
                    height: '30%',
                    name: 'ctn_buttons_company',
                    width: '100%',
                    padding: '10 0 0 0',
                    layout: {
                        type: 'hbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var form = Ext.getCmp('frm_empresas');
                                var values = form.getValues();
                                var peticion;
                                if (form.validate()){
                                    //Ext.getCmp('vtn_generar_producto').mask();
                                    if(form.getRecord()){
                                        var record = form.getRecord();
                                        record.set(values);
                                        Ext.Ajax.request({
                                            url: 'empresaController/actualizarEmpresa',
                                            method: 'POST',
                                            params: {

                                                id: values.id,
                                                nit: values.nit,
                                                nombre: values.nombre,
                                                ciudad: values.ciudad,
                                                direccion: values.direccion,
                                                telefono: values.telefono,
                                                email: values.email

                                            },
                                            success: function(response, opts) {
                                                Ext.getCmp('ctn_company_view').fn_find_company(null);
                                                Ext.getCmp('data_view_company').setStore('');
                                                Ext.getCmp('ctn_company_view').getViewModel().set('filtro',null);
                                                Ext.ComponentQuery.query('[itemId=search_field_company]')[0].setValue('');
                                                Ext.toast('Edici??n Exitosa', 1000);

                                            },
                                            failure: function(response, opts) {
                                                Ext.toast('Error al llevar a cabo el proceso', 1000);
                                            }
                                        });
                                        Ext.getCmp('vtn_generar_empresa').unmask();
                                        Ext.getCmp('vtn_generar_empresa').close();
                                    }else{
                                        form.submit({

                                            url: "empresaController/agregarEmpresa",
                                            waitMsg: 'espere',
                                            success: function(response, opts) {
                                                Ext.getStore('store_gestion_empresa').load();
                                                Ext.getCmp('grd_company').refresh();
                                                var info =Ext.getCmp('ctn_statistics_view').getViewModel().get('filtro');
                                                Ext.getCmp('ctn_statistics_view').fn_find_statistcs(info);
                                                Ext.toast('Creaci??n Exitosa', 1000);

                                            },
                                            failure: function(response, opts) {
                                                Ext.toast('Error al llevar a cabo el proceso', 1000);
                                            }

                                        });
                                        Ext.getCmp('vtn_generar_empresa').unmask();
                                        Ext.getCmp('vtn_generar_empresa').close();

                                    }

                                }else{
                                    Ext.toast('Error al validar el formulario!', 1000);
                                }

                            },
                            cls: 'color-buttons',
                            height: 50,
                            id: 'btn_empresa',
                            ui: 'round',
                            width: 50,
                            scrollable: 'vertical',
                            iconCls: 'x-fa fa-check blackIcon'
                        }
                    ]
                }
            ]
        }
    ]

});