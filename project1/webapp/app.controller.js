sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
    "sap/m/Button",
	"sap/ui/model/json/JSONModel"
], (Controller, MessageToast, Button , JSONModel ) => {
	"use strict";

	
	return Controller.extend("ui5.project1.App", {
        onInit: function () {
            var oBut = new Button( { text : "kranthi kumar " , press : this.onbutpress });
            var oPage = this.getView("app").byId("view1");
			//console.log(oPage);
			oPage.addContent(oBut);
			//oPage.addContent(oInput);
			var Odata = sap.ui.getCore().getModel("userModel").getData();
			var oModel = new JSONModel(Odata);
			this.getView().setModel(oModel,"Odata");
			console.log(Odata);
        },
		onPress() {
			MessageToast.show("Hello App!");
		},
        onbutpress() {
            MessageToast.show("kranthi kumar button pressed");
        }
	});

});