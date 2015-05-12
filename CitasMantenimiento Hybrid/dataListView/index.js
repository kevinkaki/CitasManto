'use strict';

app.dataListView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.citasMantenimientoBackend;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Notificaciones',
            dataProvider: dataProvider
        },
        schema: {
            model: {
                fields: {
                    Fecha: {
                        field: 'Fecha',
                        defaultValue: ''
                    },
                }
            }
        },
    });

    var dataListViewModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('dataListViewModel', dataListViewModel);
})(app.dataListView);