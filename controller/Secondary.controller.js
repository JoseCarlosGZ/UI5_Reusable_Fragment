// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History", 
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, UIComponent) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.Secondary", {

            onInit: function () {
                console.log("Secondary controller initialized");
            },
            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("App", {}, true);
                }
            },

            onReusableDialog: function() {
                this.getOwnerComponent().openMiDialogo();
            }
            
        });
    });
