'use strict';

app.historial = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.citasMantenimientoBackend;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Historial',
            dataProvider: dataProvider
        },
        schema: {
            model: {
                fields: {
                    Usuario: {
                        field: 'Usuario',
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