sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(UIComponent, JSONModel, ResourceModel) {
    "use strict"

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        // parameters
        metadata:{
            manifest : "json"
        },
        init : function() {
            // call the init function of the parent ui component of SAP
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            var oData = {
                recipient : {
                    name:"Pablo"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});
