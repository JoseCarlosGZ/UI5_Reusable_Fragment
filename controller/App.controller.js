// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () {

            },

            onOpenDialogHeader: function() {
                this.getOwnerComponent().openMiDialogo();
            },
            onNavToSecondary:  function () {
                sap.ui.core.UIComponent.getRouterFor(this).navTo("Secondary");
                console.log("%c Se ha ejecutado la función onNavToSecondary", "background:#086; color:white; font-size:.8rem");
            }
            
        });
    });
