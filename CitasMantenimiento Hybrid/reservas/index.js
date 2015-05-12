'use strict';

app.reservas = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.citasMantenimientoBackend;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Reservas',
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

    var reservasModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('reservasModel', reservasModel);
})(app.reservas);