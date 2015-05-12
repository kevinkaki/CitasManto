'use strict';

app.notificaciones = kendo.observable({
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
                    Mensaje: {
                        field: 'Mensaje',
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