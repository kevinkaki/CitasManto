'use strict';

app.citas = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var citasModel = kendo.observable({
        fields: {
            kms: '',
            placa: '',
            date: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('citasModel', citasModel);
})(app.citas);