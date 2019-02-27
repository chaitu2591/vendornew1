sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("VendorMaster.VendorMaster.controller.View1", {
		onInit: function () {
		this.Search_press();

		},
		
	Search_press: function(){
		
	var url;
	var vendor = this.getView().byId("input0").getValue();	
	url = "/sap/opu/odata/SAP/ZVENDOR_SRV/VendorDetailsSet?$filter=Vendor eq '"+ vendor +"' ";
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.loadData(url,null,false);
	var tab = this.getView().byId("table");
	tab.setModel(oModel,"tab");
	}
	});
});