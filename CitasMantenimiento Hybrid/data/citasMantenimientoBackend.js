'use strict';

(function() {
    app.data.citasMantenimientoBackend = new Everlive({
        offlineStorage: true,
        apiKey: '3MmI4oaAUwS2fDVC',
        url: '//platform.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener("online", function() {
        app.data.citasMantenimientoBackend.offline(false);
        app.data.citasMantenimientoBackend.sync();
    });

    document.addEventListener("offline", function() {
        app.data.citasMantenimientoBackend.offline(true);
    });

}());