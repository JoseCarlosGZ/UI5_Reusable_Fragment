// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/ReusableFragment"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel, ReusableFragment) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                /*Inicilizamos el enrutamiento. Sin esta sentencia, no se podría navegar en la aplicación  */
                this.getRouter().initialize();

                // set data model on the view
                this.setModel(Models.instanciarMiModelo(), "MiModelo");

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

                //Creamos una instancia del archivo que contiene la lógica del Dialog que se va a reutilzar en varias vistas. Y al constructor le pasamos el statement this.getRootControl() que recupera el objeto vista que ha llamado a la función del Component.js denominada openMiDialogo y que coincidirá con la vista que está renderizada y es vista actualmente por el usuario de la app.
                this.propReusableFragment = new ReusableFragment(this.getRootControl());

            }, 

            exit: function() {
               this.propReusableFragment.destroy();
               delete this.propReusableFragment;
            },

            openMiDialogo: function () {
                //En la propiedad del Component.js denominada propReusableFragment ya tenemos metida una instancia del archivo ReusableFragment.js, por lo que tenemos acceso a todos los métodos de dicho archivo.
                this.propReusableFragment.open();
            }
        });

    });