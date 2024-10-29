sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/m/Button",
        "sap/ui/model/json/JSONModel"
    ], function (Controller, MessageToast, Button, JSONModel) {
        "use strict";
    
        return Controller.extend("ui5.project1.createButoons", {
            onInit: function () {
                var oBut = new Button({
                    text: "kranthi kumar",
                    press: this.onbutpress.bind(this)
                });
    
                var oPage = this.getView().byId("view1");
                oPage.addContent(oBut);
    
                var oData = {
                    user: [{
                        name: "John Doe",
                        age: 30
                    }]
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "Odata");
                console.log(oData);
            },
    
            onPress: function () {
                MessageToast.show("Hello App!");
            },
    
            onbutpress: function () {
                MessageToast.show("kranthi kumar button pressed");
            },
    
            toCalculator: function () {
                console.log('navigation to calculator');
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("calculator");
            }
        });
    });
    