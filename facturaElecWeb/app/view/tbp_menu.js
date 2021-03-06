/*
 * File: app/view/tbp_menu.js
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

Ext.define('facturaElecWeb.view.tbp_menu', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tbp_menu',

    requires: [
        'facturaElecWeb.view.tbp_menuViewModel',
        'facturaElecWeb.view.ctn_account',
        'facturaElecWeb.view.ctn_user_view',
        'facturaElecWeb.view.ctn_company_view',
        'facturaElecWeb.view.ctn_client_view',
        'facturaElecWeb.view.ctn_product_view',
        'facturaElecWeb.view.ctn_invoice_view',
        'facturaElecWeb.view.ctn_statistics_view',
        'Ext.tab.Bar'
    ],

    viewModel: {
        type: 'tbp_menu'
    },
    activeItem: 6,
    id: 'tbp_menu',
    activeChildTabIndex: 7,

    tabBar: {
        docked: 'top',
        activeTab: 1,
        animateIndicator: true,
        layout: {
            type: 'hbox',
            reverse: true
        }
    },
    items: [
        {
            xtype: 'ctn_account',
            title: 'Cuenta'
        },
        {
            xtype: 'ctn_user_view',
            tabIndex: 7,
            title: 'Usuarios'
        },
        {
            xtype: 'ctn_company_view',
            itemId: 'ctn_company_view1',
            tabIndex: 4,
            title: 'Empresas'
        },
        {
            xtype: 'ctn_client_view',
            itemId: 'ctn_client_view1',
            tabIndex: 3,
            title: 'Clientes'
        },
        {
            xtype: 'ctn_product_view',
            itemId: 'ctn_product_view1',
            tabIndex: 2,
            title: 'Productos'
        },
        {
            xtype: 'ctn_invoice_view',
            itemId: 'ctn_invoice_view1',
            tabIndex: 1,
            title: 'Facturas'
        },
        {
            xtype: 'ctn_statistics_view',
            itemId: 'ctn_statistics_view1',
            tabIndex: 0,
            title: 'Informaci??n'
        }
    ]

});