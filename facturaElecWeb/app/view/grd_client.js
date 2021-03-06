/*
 * File: app/view/grd_client.js
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

Ext.define('facturaElecWeb.view.grd_client', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.grd_client',

    requires: [
        'facturaElecWeb.view.grd_clientViewModel',
        'Ext.grid.column.Column'
    ],

    viewModel: {
        type: 'grd_client'
    },
    height: '100%',
    id: 'grd_client',
    width: '100%',
    scrollable: 'vertical',
    layout: 'vbox',
    store: 'store_gestion_cliente',
    defaultListenerScope: true,

    columns: [
        {
            xtype: 'gridcolumn',
            width: '20%',
            dataIndex: 'documento',
            text: 'Documento'
        },
        {
            xtype: 'gridcolumn',
            width: '25%',
            dataIndex: 'nombre',
            text: 'Nombre'
        },
        {
            xtype: 'gridcolumn',
            width: '15%',
            dataIndex: 'ciudad',
            text: 'Ciudad'
        },
        {
            xtype: 'gridcolumn',
            width: '15%',
            dataIndex: 'telefono',
            text: 'Telefono'
        },
        {
            xtype: 'gridcolumn',
            width: '25%',
            dataIndex: 'correo',
            text: 'Correo'
        }
    ],
    listeners: {
        select: 'onGridSelect'
    },

    onGridSelect: function(dataview, selected, eOpts) {
        var filter = selected[0].data.documento;
        Ext.getCmp('ctn_client_view').fn_find_client(filter);
        Ext.getCmp('data_view_client').setStore('store_gestion_cliente');
        Ext.getCmp('ctn_client_view').getViewModel().set('filtro',filter);
    }

});