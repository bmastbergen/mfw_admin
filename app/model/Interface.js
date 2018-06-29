Ext.define('Mfw.model.Interface', {
    extend: 'Ext.data.Model',
    alias: 'model.interface',
    fields: [
        { name: 'configType',        type: 'string' },
        { name: 'dhcpEnabled',       type: 'boolean' },
        { name: 'dhcpLeaseDuration', type: 'int' },
        { name: 'dhcpRangeEnd',      type: 'string' },
        { name: 'dhcpRangeStart',    type: 'string' },
        { name: 'interfaceId',       type: 'int' },
        { name: 'name',              type: 'string' },
        { name: 'natEgress',         type: 'boolean' },
        { name: 'physicalDev',       type: 'string' },
        { name: 'symbolicDev',       type: 'string' },
        { name: 'systemDev',         type: 'string' },
        { name: 'v4ConfigType',      type: 'string' },
        { name: 'v4StaticAddress',   type: 'string' },
        { name: 'v4StaticNetmask',   type: 'string' },
        { name: 'v4StaticPrefix',    type: 'int' },
        { name: 'v6ConfigType',      type: 'string' },
        { name: 'wan',               type: 'boolean' }
    ]
});