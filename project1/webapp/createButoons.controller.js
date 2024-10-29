sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/Button",
    "sap/m/Panel",
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
        "sap/ui/core/UIComponent"
], function (Controller, MessageToast, Button, Panel, Text, JSONModel , UIComponent ) {
    var counter = 0;

    return Controller.extend("UI5.project1.createButoons", {


            onbutAdd: function () {
                    counter++;
                    var str = "AddText" + counter;
                    console.log(str);
                    new Text(str, {
                            text: "Added contect press remove content "
                    }).placeAt("Pan1");
                    var remove = sap.ui.getCore().byId('RemBut');
                    var remadd = sap.ui.getCore().byId('AddBut');
                    if (counter >= 1) {
                            remove.setVisible(true);
                    } else {

                            remove.setVisible(false);
                    }
                    if (counter > 10) {
                            remadd.setVisible(false);
                    } else {
                            remadd.setVisible(true);
                    }
            },

            onbutRem: function () {

                    var restr = "AddText" + counter;
                    var oremtext = sap.ui.getCore().byId(restr).destroy();
                    counter--;
                    console.log(counter);
                    var remove = sap.ui.getCore().byId('RemBut');
                    var remadd = sap.ui.getCore().byId('AddBut');
                    if (counter === 0) {
                            remove.setVisible(false);
                    }
                    if (counter <= 10) {
                            remadd.setVisible(true);
                    }



            },
            toCalculator: function () {
                    console.log('navigation to calculator ');
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("calculator");
            },


            onInit: function () {




                    var pan = new Panel("Pan1", {
                            headerText: " Adding content Panel"
                    }); // .placeAt("CreatBut");

                    var butAdd = new Button("AddBut", {
                            text: "add control",
                            press: this.onbutAdd
                    }); //.placeAt("Pan1");


                    var butRem = new Button("RemBut", {
                            text: "remove content",
                            press: this.onbutRem
                    }); //.placeAt("Pan1");
                    var oLayout = this.getView().byId("CreatBut");
                    oLayout.addItem(pan);
                    oLayout.addItem(butAdd);
                    oLayout.addItem(butRem);
                    //  this.getView().addContent(pan);
                    //   this.getView().addContent(butAdd);
                    //   this.getView().addContent(butRem);

                    var remove = sap.ui.getCore().byId('RemBut');
                    remove.setVisible(false);

                    var n1 = new Button("navtocal", {
                            text: "nav to calculator",
                            press: this.toCalculator
                    });
                    oLayout.addItem(n1);

                 //   UIComponent.prototype.init.apply(this, arguments);

                    // Set up the JSON model
                   // Initialize the router
                   // this.getOwnerComponent().getRouter().initialize();

                   console.log(sap.ui.getCore().getModel("userModel").getData());//get Omodel data 
            },

            onBeforeRendering: function () {
                    console.log("onBeforeRendering function called");
            },

            onAfterRendering: function () {
                    console.log("onAfterRendering function called", counter);

            },

            onExit: function () {
                    console.log("onExit() of controller called...");
                    alert("onExit function called");
            }

    });

});