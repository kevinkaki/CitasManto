'use strict';

app.notificaciones = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.defaultProvider;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Comments',
            dataProvider: dataProvider
        },
        schema: {
            model: {
                fields: {
                    UserId: {
                        field: 'UserId',
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