/*
 * File: app/view/ctn_invoice_view.js
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

Ext.define('facturaElecWeb.view.ctn_invoice_view', {
    extend: 'Ext.Container',
    alias: 'widget.ctn_invoice_view',

    requires: [
        'facturaElecWeb.view.ctn_invoice_viewViewModel',
        'facturaElecWeb.view.grd_invoice',
        'Ext.field.Search',
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.grid.Grid',
        'Ext.grid.column.Number',
        'Ext.Button'
    ],

    viewModel: {
        type: 'ctn_invoice_view'
    },
    id: 'ctn_invoice_view',
    layout: 'hbox',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'container',
            flex: 2.5,
            cls: 'borde-gestion-info',
            name: 'ctn_info_invoice',
            padding: '10 0 0 0',
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    flex: 0.5,
                    name: 'ctn_search_invoice',
                    layout: 'center',
                    items: [
                        {
                            xtype: 'searchfield',
                            validators: function(value) {
                                if(!/^([0-9])*$/.test(value)){
                                    return "El codigo debe ser  un número entero";
                                }else if(value<0){
                                    return "La cantidad de caracteres ingresada es inválida";

                                }else{
                                    return true;
                                }
                            },
                            itemId: 'search_field_invoice',
                            name: 'search_field_invoice',
                            width: '70%',
                            labelCls: 'my-text',
                            placeholder: 'Buscar por codigo',
                            listeners: {
                                keyup: 'onSearch_field_invoiceKeyup'
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    name: 'ctn_info_invoice_full',
                    scrollable: 'vertical',
                    items: [
                        {
                            xtype: 'dataview',
                            id: 'data_view_invoice',
                            margin: '0 0 10 0',
                            padding: '0 0 0 30',
                            itemTpl: [
                                '<div class="table-generic">',
                                '    <table>',
                                '',
                                '        <tbody >',
                                '            <tr>',
                                '',
                                '                <th class="row-generic">Codigo:</th>',
                                '',
                                '                <td class="row-generic">{codigo}</td>',
                                '',
                                '            </tr>',
                                '            <tr>',
                                '',
                                '                <th class="row-generic">Fecha de creación:</th>',
                                '',
                                '                <td class="row-generic">{fechaCreacion}</td>',
                                '',
                                '            </tr>',
                                '            <tr>',
                                '',
                                '                <th class="row-generic">Documento Cliente:</th>',
                                '',
                                '                <td class="row-generic">{documentoCliente}</td>',
                                '',
                                '            </tr>',
                                '            <tr>',
                                '',
                                '                <th class="row-generic">Nombre del cliente:</th>',
                                '',
                                '                <td class="row-generic">{nombreCliente}</td>',
                                '',
                                '            </tr>',
                                '            <tr>',
                                '',
                                '                <th class="row-generic">Nit Empresa:</th>',
                                '',
                                '                <td class="row-generic">{nitEmpresa}</td>',
                                '',
                                '            </tr>',
                                '            <tr>',
                                '',
                                '                <th class="row-generic">Nombre de la empresa:</th>',
                                '',
                                '                <td class="row-generic">{nombreEmpresa}</td>',
                                '',
                                '            </tr>',
                                '            <tr>',
                                '',
                                '                <th class="row-generic">Total:</th>',
                                '',
                                '                <td class="row-generic">$ {total}</td>',
                                '',
                                '            </tr>',
                                '        </tbody>',
                                '    </table>',
                                '</div>'
                            ]
                        },
                        {
                            xtype: 'grid',
                            height: '100%',
                            hidden: true,
                            id: 'grd_view_product_invoice',
                            width: '100%',
                            store: 'store_gestion_all_producto_factura',
                            title: '                      Productos',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    width: '25%',
                                    dataIndex: 'codigo',
                                    text: 'Codigo'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: '25%',
                                    dataIndex: 'nombre',
                                    text: 'Nombre'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: '25%',
                                    dataIndex: 'marca',
                                    text: 'Marca'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    width: '25%',
                                    dataIndex: 'precio',
                                    text: 'Precio'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.8,
                    name: 'ctn_buttons_invoice',
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
                                debugger;
                                Ext.getCmp('ctn_invoice_view').fn_find_invoice(null);
                                Ext.getCmp('data_view_invoice').setStore('');
                                Ext.getCmp('grd_view_product_invoice').setHidden(true);
                                Ext.ComponentQuery.query('[itemId=search_field_invoice]')[0].setValue('');
                                Ext.getCmp('ctn_invoice_view').getViewModel().set('filtro',null);
                            },
                            cls: 'color-buttons',
                            height: 50,
                            id: 'btn_refresh_invoice',
                            ui: 'round',
                            width: 50,
                            margin: '0 5 0 0',
                            iconCls: 'x-fa fa-refresh blackIcon'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var filter = Ext.getCmp('ctn_invoice_view').getViewModel().get('filtro');
                                if(filter != null){
                                    Ext.Msg.show({
                                        title: 'Confirmación',
                                        message: "¿Esta seguro de eliminar la factura con codigo "+filter+"?",
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
                                                    url: 'facturaController/eliminarFactura?codigo='+filter,
                                                    method: 'GET',
                                                    success: function(response, opts) {
                                                        Ext.getCmp('ctn_invoice_view').fn_find_invoice(null);
                                                        Ext.getCmp('data_view_invoice').setStore('');
                                                        Ext.getCmp('grd_view_product_invoice').setHidden(true);
                                                        Ext.getCmp('ctn_invoice_view').getViewModel().set('filtro',null);
                                                        Ext.ComponentQuery.query('[itemId=search_field_invoice]')[0].setValue('');
                                                        var info =Ext.getCmp('ctn_statistics_view').getViewModel().get('filtro');
                                                        Ext.getCmp('ctn_statistics_view').fn_find_statistcs(info);
                                                        Ext.toast('Exito al eliminar', 1000);

                                                    },
                                                    failure: function(response, opts) {
                                                        Ext.toast('Error al llevar a cabo el proceso, El cliente esta vinculado a una factura', 1000);
                                                    }
                                                });
                                            }else{
                                                this.close();
                                            }
                                        },
                                        icon: Ext.Msg.QUESTION
                                    });


                                }else{
                                    Ext.toast('Seleccione una factura', 1000);
                                }
                            },
                            cls: 'color-buttons',
                            height: 50,
                            name: 'btn_delete_invoice',
                            ui: 'round',
                            width: 50,
                            margin: '0 5 0 0',
                            iconCls: 'x-fa fa-trash blackIcon'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var filter = Ext.getCmp('ctn_invoice_view').getViewModel().get('filtro');
                                if(filter != null){
                                    Ext.getStore('store_gestion_producto_factura').data.clear();
                                    var vtn = Ext.create('widget.vtn_generar_factura',{
                                        title : '¡ EDITAR FACTURA !'
                                    }).show();
                                    Ext.getCmp('vtn_generar_factura').getViewModel().set('inhabilitarCodigo',false);
                                    var store = Ext.getStore('store_gestion_all_factura');
                                    var record = store.findRecord('codigo', filter, 0, false, true, true);
                                    var form =Ext.getCmp('frm_factura');
                                    form.setRecord(record);

                                    var storeProductosFactura = Ext.getStore('store_factura_productos');
                                    storeProductosFactura.proxy.extraParams ={
                                        codigo : filter
                                    };


                                    storeProductosFactura.load({
                                        params:{
                                            codigo:filter
                                        },
                                        callback: function(records, operation, success) {
                                            if(success){
                                                for(var i = 0;i < records.length; i++){
                                                    Ext.getStore('store_gestion_producto_factura').add(records[i].data);
                                                }
                                                var noAlmacenado=false;
                                                var total = storeProductosFactura.totalCount;
                                                if(total === 0){
                                                    Ext.toast('No hay resultados para la búsqueda',1000);
                                                }

                                            }
                                        }
                                    });



                                }else{
                                    Ext.toast('Seleccione una factura', 1000);
                                }
                            },
                            cls: 'color-buttons',
                            height: 50,
                            name: 'btn_edit_invoice',
                            ui: 'round',
                            width: 50,
                            margin: '0 5 0 0',
                            iconCls: 'x-fa fa-pencil-square-o blackIcon'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                Ext.getStore('store_gestion_producto_factura').data.clear();
                                var vtn = Ext.create('widget.vtn_generar_factura',{
                                    title : '¡ NUEVA FACTURA !'
                                }).show();
                                Ext.getCmp('vtn_generar_factura').getViewModel().set('inhabilitarCodigo',true);
                            },
                            cls: 'color-buttons',
                            height: 50,
                            name: 'btn_add_invoice',
                            ui: 'round',
                            width: 50,
                            margin: '0 5 0 0',
                            iconCls: 'x-fa fa-plus blackIcon'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, e) {
                                var filter = Ext.getCmp('ctn_invoice_view').getViewModel().get('filtro');
                                if(filter != null){
                                    ;
                                    Ext.getStore('store_gestion_producto_factura').data.clear();

                                    var storeAllFactura = Ext.getStore('store_gestion_all_factura');



                                    var storeProductosFactura = Ext.getStore('store_factura_productos');
                                    storeProductosFactura.proxy.extraParams ={
                                        codigo : filter
                                    };


                                    storeProductosFactura.load({
                                        params:{
                                            codigo:filter
                                        },
                                        callback: function(records, operation, success) {
                                            if(success){
                                                for(var i = 0;i < records.length; i++){
                                                    Ext.getStore('store_gestion_producto_factura').add(records[i].data);


                                                }

                                                var storeAllProductoFactura = Ext.getStore('store_gestion_producto_factura');

                                                const pdf = new jsPDF();
                                                pdf.text(80, 10, `Factura electronica`);
                                                pdf.text(170, 10, `Version 001`);
                                                pdf.text(20, 40, `Codigo`);
                                                pdf.text(90, 40, `${storeAllFactura.data.items[0].data.codigo}`);
                                                pdf.text(20, 50, `Fecha`);
                                                pdf.text(90, 50, `${storeAllFactura.data.items[0].data.fechaCreacion}`);
                                                pdf.text(20, 60, `Identificación del cliente`);
                                                pdf.text(90, 60, `${storeAllFactura.data.items[0].data.documentoCliente}`);
                                                pdf.text(20, 70, `Nombre del cliente`);
                                                pdf.text(90, 70, `${storeAllFactura.data.items[0].data.nombreCliente}`);
                                                pdf.text(20, 80, `Nit de la empresa`);
                                                pdf.text(90, 80, `${storeAllFactura.data.items[0].data.nitEmpresa}`);
                                                pdf.text(20, 90, `Nombre de la empresa`);
                                                pdf.text(90, 90, `${storeAllFactura.data.items[0].data.nombreEmpresa}`);
                                                pdf.text(20, 100, `Total`);
                                                pdf.text(90, 100, `$ ${storeAllFactura.data.items[0].data.total}`);
                                                pdf.text(90, 120, `Productos`);

                                                pdf.text(5,130, `Codigo`);
                                                pdf.text(45,130, `Nombre`);
                                                pdf.text(95,130, `Precio`);
                                                pdf.text(140,130, `Cantidad`);
                                                pdf.text(170,130, `Total`);

                                                var y = 140;
                                                for(var i = 0; i < storeAllProductoFactura.data.items.length; i++){
                                                    y = y+10;
                                                    pdf.text(5,y, `${storeAllProductoFactura.data.items[i].data.codigo}`);
                                                    pdf.text(45,y, `${storeAllProductoFactura.data.items[i].data.nombre}`);

                                                    pdf.text(95,y, `$ ${storeAllProductoFactura.data.items[i].data.precio}`);
                                                    pdf.text(140,y, `${storeAllProductoFactura.data.items[i].data.cantidad}`);
                                                    pdf.text(170,y, `$ ${storeAllProductoFactura.data.items[i].data.totalProducto}`);

                                                }


                                                pdf.save(filter+'.pdf');

                                                Ext.toast('Exito al generar la factura', 1000);
                                                Ext.getCmp('ctn_invoice_view').fn_find_invoice(null);
                                                Ext.getCmp('data_view_invoice').setStore('');
                                                Ext.getCmp('grd_view_product_invoice').setHidden(true);
                                                Ext.ComponentQuery.query('[itemId=search_field_invoice]')[0].setValue('');
                                                Ext.getCmp('ctn_invoice_view').getViewModel().set('filtro',null);
                                                var noAlmacenado=false;
                                                var total = storeProductosFactura.totalCount;
                                                if(total === 0){
                                                    Ext.toast('No hay resultados para la búsqueda',1000);
                                                }

                                            }
                                        }
                                    });

                                }else{
                                    Ext.toast('Seleccione una factura', 1000);
                                }
                            },
                            cls: 'color-buttons',
                            height: 50,
                            name: 'btn_download_invoice',
                            ui: 'round',
                            width: 50,
                            iconCls: 'x-fa fa-download blackIcon'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 4.5,
            name: 'ctn_grid_invoice',
            padding: '30 30 0 30',
            items: [
                {
                    xtype: 'container',
                    height: '100%',
                    name: 'ctn_grid_medium_invoice',
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
                            name: 'ctn_grid_internal_invoice',
                            width: '100%',
                            items: [
                                {
                                    xtype: 'grd_invoice',
                                    itemId: 'grd_invoice_view'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    onSearch_field_invoiceKeyup: function(textfield, e, eOpts) {
        var filter= textfield.getValue();
        if (e.event.keyCode == 13){
            Ext.getCmp('ctn_invoice_view').fn_find_invoice(filter);
            Ext.getCmp('ctn_invoice_view').fn_find_product_invoice(filter);
            Ext.getCmp('data_view_invoice').setStore('store_gestion_all_factura');
            Ext.getCmp('ctn_invoice_view').getViewModel().set('filtro',filter);
        }
        if(!textfield.getValue()){
            Ext.getCmp('ctn_invoice_view').fn_find_invoice(null);
            Ext.getCmp('data_view_invoice').setStore('');
            Ext.getCmp('grd_view_product_invoice').setHidden(true);
        }
    },

    fn_find_invoice: function(filter) {
        var storeInvoice = Ext.getStore('store_gestion_all_factura');
        storeInvoice.proxy.extraParams ={
            filtro : filter
        };

        storeInvoice.load({
            params:{
                filtro:filter
            },
            callback: function(records, operation, success) {
                if(success){
                    var noAlmacenado=false;
                    var total = storeInvoice.totalCount;
                    if(total === 0){
                        Ext.getCmp('grd_view_product_invoice').setHidden(true);
                        //Ext.getCmp('ctn_invoice_view').fn_find_invoice(null);
                        Ext.getCmp('data_view_invoice').setStore('');
                        Ext.getCmp('grd_view_product_invoice').setHidden(true);
                        Ext.ComponentQuery.query('[itemId=search_field_invoice]')[0].setValue('');
                        Ext.getCmp('ctn_invoice_view').getViewModel().set('filtro',null);
                        Ext.toast('No hay resultados para la búsqueda',1000);
                    }

                    if(filter != null){
                        Ext.getCmp('grd_view_product_invoice').setHidden(false);

                    }

                }
            }
        });
    },

    fn_find_product_invoice: function(filter) {
        var storeProductInvoice = Ext.getStore('store_gestion_all_producto_factura');
        storeProductInvoice.proxy.extraParams ={
            filtro : filter
        };


        storeProductInvoice.load({
            params:{
                filtro:filter
            },
            callback: function(records, operation, success) {
                if(success){
                    var noAlmacenado=false;
                    var total = storeProductInvoice.totalCount;
                    if(total === 0){
                        Ext.toast('No hay resultados para la búsqueda',1000);
                    }

                }
            }
        });
    }

});