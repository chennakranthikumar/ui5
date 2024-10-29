
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("ui5.project1.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // Initialize the router
            this.getRouter().initialize();

            // Set up a JSON model
            // var oData = {
            //     user: [{
            //         name: "John Doe",
            //         age: 30
            //     }]
            // };
            // var oModel = new JSONModel(oData);
            // this.setModel(oModel, "userModel");
        }
    });
});
