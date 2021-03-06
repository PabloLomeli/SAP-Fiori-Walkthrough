sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

], function(Controller, MessageToast, Fragment) {
    'use strict';
    
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            
            // Show a native or vanilla JS alert
            MessageToast.show(sMsg);
        },

        onOpenDialog : function () {
            var oView = this.getView();
            
            //create the dialog using frag
            if(!this.byId("helloDialog")) {
                // async load of dialog frag
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog"
                }).then(function (oDialog) {
                    // connect dialog to root view of component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                this.byId("helloDialog").open();
            }

        }
    });
});