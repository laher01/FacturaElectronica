/*
 * File: app/store/store_gestion_producto_factura.js
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

Ext.define('facturaElecWeb.store.store_gestion_producto_factura', {
    extend: 'Ext.data.Store',

    requires: [
        'facturaElecWeb.model.model_gestion_producto',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'store_gestion_producto_factura',
            model: 'facturaElecWeb.model.model_gestion_producto',
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});