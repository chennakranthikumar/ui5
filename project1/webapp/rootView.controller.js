sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/Button",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Button, JSONModel) {
    "use strict";

    return Controller.extend("ui5.project1.rootView", {
        onInit: function () {
            var navto = new Button("nav1", {
                text: "navigate to calculator",
                type: "Accept",
                press: this.onNavPress.bind(this)
            });
            
            // Ensure the view is fully initialized before accessing it
            this.getView().addEventDelegate({
                onAfterRendering: function() {
                    var oPage = this.byId("rootCont");
                    if (oPage) {
                        oPage.addContent(navto);
                    } else {
                        console.error("Page with ID 'view1' not found.");
                    }
                }.bind(this)
            });
        },

        onNavPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            if (oRouter) {
                oRouter.navTo("calculator");
            } else {
                console.error("Router not found.");
            }
        }
    });
});
