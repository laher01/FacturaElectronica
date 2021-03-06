/*
 * File: app/view/grd_company.js
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

Ext.define('facturaElecWeb.view.grd_company', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.grd_company',

    requires: [
        'facturaElecWeb.view.grd_companyViewModel',
        'Ext.grid.column.Column'
    ],

    viewModel: {
        type: 'grd_company'
    },
    height: '100%',
    id: 'grd_company',
    width: '100%',
    layout: 'vbox',
    store: 'store_gestion_empresa',
    defaultListenerScope: true,

    columns: [
        {
            xtype: 'gridcolumn',
            width: '20%',
            dataIndex: 'nit',
            text: 'Nit'
        },
        {
            xtype: 'gridcolumn',
            width: '30%',
            dataIndex: 'nombre',
            text: 'Nombre'
        },
        {
            xtype: 'gridcolumn',
            width: '20%',
            dataIndex: 'telefono',
            text: 'Telefono'
        },
        {
            xtype: 'gridcolumn',
            width: '30%',
            dataIndex: 'email',
            text: 'E-mail'
        }
    ],
    listeners: {
        select: 'onGridSelect'
    },

    onGridSelect: function(dataview, selected, eOpts) {
        var filter = selected[0].data.nit;
        Ext.getCmp('ctn_company_view').fn_find_company(filter);
        Ext.getCmp('data_view_company').setStore('store_gestion_empresa');
        Ext.getCmp('ctn_company_view').getViewModel().set('filtro',filter);
    }

});