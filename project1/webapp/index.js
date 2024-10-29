sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast",
    "sap/ui/core/mvc/XMLView",
    "sap/m/Text",
    "sap/m/Panel",
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
     "sap/ui/core/ComponentContainer"
], function (Button, MessageToast, XMLView, Text, Panel, Controller, UIComponent, JSONModel ,ComponentContainer) {
    "use strict";

    // Create a new button
    new Button({
        text: "Ready...",
        press: function () {
            MessageToast.show("Button Pressed!");
        }
    }).placeAt("content");

    // Create a new panel
    var pan = new Panel("MainPan", {
        headerText: "Main content Panel"
    }).placeAt("content");

    // Load and add the first view to the panel

    XMLView.create({
        viewName: "ui5.project1.App"
    }).then(function (oView) {
        oView.placeAt("content");

    });

    // Load and add the second view to the panel
    XMLView.create({
        viewName: "ui5.project1.createButoons"
    }).then(function (oView) {
        oView.placeAt("content");
    });
    XMLView.create({
        viewName:"ui5.project1.rootView"
    }).then((oView)=> oView.placeAt("content"));

    var oData = {
        user: [{
            name: "John Doe",
            age: 30
        }]
    };
    var oModel = new JSONModel(oData);
    sap.ui.getCore().setModel(oModel, "userModel");
    console.log(sap.ui.getCore().getModel("userModel").getData()); // print the data model
    console.log(oModel.getProperty("/user/name"));
    var onew = {
        name: "kranthi",
        age: 27
    };
    var oData = oModel.getData();

    oData.user.push(onew);
    oModel.setData(oData);
    // appemd to same model
    console.log(sap.ui.getCore().getModel("userModel").getData());

    

    
        new ComponentContainer({
            name: "ui5.project1",
            settings: {
                id: "project1"
            },
            async: true
        }).placeAt("content");

    

});