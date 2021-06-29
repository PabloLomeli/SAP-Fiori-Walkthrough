sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast", // Module?
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.App",{
        /*// This happens when model first loads (MOVED TO COMPONENT.JS)
        onInit: function() {
            // set the data model on the view
            var oData = {
                recipient : {
                    name:"UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            var i18nModel = new ResourceModel({
                bundleName:"sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales:[""],
                fallbackLocale:""
            });

            this.getView().setModel(i18nModel, "i18n"); // second argument is an alias
        },*/

        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            
            // Show a native or vanilla JS alert
            MessageToast.show(sMsg);
        }
    });
});