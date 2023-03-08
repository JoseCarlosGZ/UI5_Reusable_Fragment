// @ts-nocheck
sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict";

        return {

            instanciarMiModelo: function () {
                var oData = {
                    resultSet: [
                        {name: "value0"},
                        {name: "value1"},
                        {name: "Fragment reutilizable"},
                        {name: "value3"}
                    ]
                };

                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(oData);
                return oModel;
            }

        }
    });