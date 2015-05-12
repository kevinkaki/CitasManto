'use strict';

app.notificaciones = kendo.observable({
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

    var notificacionesModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('notificacionesModel', notificacionesModel);
})(app.notificaciones);