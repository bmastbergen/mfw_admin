Ext.define('Mfw.store.Interfaces', {
    extend: 'Ext.data.Store',
    storeId: 'interfaces',
    alias: 'store.interfaces',
    model: 'Mfw.model.Interface',

    data: [{"configType":"ADDRESSED","device":"eth0","dhcpEnabled":true,"dhcpLeaseDuration":3600,"dhcpRangeEnd":"192.168.1.200","dhcpRangeStart":"192.168.1.100","interfaceId":1,"name":"internal","type":"NIC","v4ConfigType":"STATIC","v4StaticAddress":"192.168.1.1","v4StaticPrefix":24,"v6AssignHint":"1234","v6AssignPrefix":64,"v6ConfigType":"ASSIGN","wan":false},{"configType":"ADDRESSED","device":"eth1","interfaceId":2,"name":"external","natEgress":true,"type":"NIC","v4ConfigType":"DHCP","v6ConfigType":"DISABLED","wan":true}]

    // proxy: {
    //     type: 'ajax',
    //     // url: 'http://192.168.0.101:8080/settings/get_settings/network/interfaces',
    //     reader: {
    //         type: 'array',
    //         // rootProperty: 'interfaces'
    //     },
    // },
    // autoLoad: true
});
