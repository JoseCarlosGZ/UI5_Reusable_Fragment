// @ts-nocheck
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
    /**
     * 
     * @param {typeof sap.ui.base.ManagedObject} ManagedObject 
     * @param {typeof sap.ui.core.Fragment} Fragment
     */
    function (ManagedObject, Fragment) {
        "use strict"

        return ManagedObject.extend("logaligroup.SAPUI5.controller.ReusableFragment", {

            //Al crearse una instancia de este archivo en el Component.js, nos envía el objeto de la vista que hay abierta en ese momento y en donde se va a abrir el diálogo. o las funciones reutilizables que en este archivo pongamos.
            constructor: function (oView) {
                this._oView = oView;
            },


            //Esta función se ejecuta implícitmente. Es para "limpiar" el objeto vista que se nos ha pasado.
            exit: function () {
                delete this._oView;
            },

            open: function () {

                const oView = this._oView;

                // create dialog lazily
                if (!oView.byId("id_MiDialogo")) {

                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("id_MiDialogo").close();
                        }
                    };

                    // load asynctonous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "logaligroup.SAPUI5.view.MiDialogo",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                            oView.addDependent(oDialog);
                            oDialog.open();
                        });
                } else {
                    oView.byId("id_MiDialogo").open();
                }
            }
        });
    });