'use strict';

app.citas = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var provider = app.data.citasMantenimientoBackend,
      /*  
        signupSuccess =
        function(data) {
            app.user = data.result;
            app.mobileApp.navigate('home/view.html');
        },
        
        signupInit =
        function() {
            if (provider.setup.offlineStorage && !app.isOnline()) {
                $('.signup-view').hide().siblings().show();
            } else {
                $('.signup-view').show().siblings().hide();
            }
        },
        
        registerViewModel = kendo.observable({
            username: '',
            password: '',
            email: '',
            register: function() {
                var attrs = {
                    Email: registerViewModel.email,
                    
                };

                provider.Users.register(registerViewModel.username, registerViewModel.password, attrs,
                    function(data) {
                        if (data && data.result) {
                            signupSuccess(data);
                        }
                    },
                    signupInit
                );
            }
        });*/
    
    var citasModel = kendo.observable({
        fields: {
            sucursal: '',
            kms: '',
            placa: '',
            date: '',
        },
        submit: function() {
            var attrs = {
                	Sucursal: citasModel.sucursal,
                	Kms: citasModel.kms,
                	Placa: citasModel.placa,
                	Date: citasModel.date,
                
            app.mobileApp.navigate('home/view.html');
        },
        cancel: function() {
            
            app.mobileApp.navigate('home/view.html');
        }
    });

    parent.set('citasModel', citasModel);
})(app.citas);