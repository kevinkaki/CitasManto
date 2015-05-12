'use strict';

app.home = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var homeModel = kendo.observable({
        openLink: function(url) {
            window.open(url, '_system');
            if (window.event) {
                window.event.preventDefault && window.event.preventDefault();
                window.event.returnValue = false;
            }
        }
    });

    parent.set('homeModel', homeModel);
})(app.home);