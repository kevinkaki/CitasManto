'use strict';

app.historial = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.citasMantenimientoBackend;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Usuarios',
            dataProvider: dataProvider
        },
        schema: {
            model: {
                fields: {
                    Apellido: {
                        field: 'Apellido',
                        defaultValue: ''
                    },
                }
            }
        },
    });

    var historialModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('historialModel', historialModel);
})(app.historial);