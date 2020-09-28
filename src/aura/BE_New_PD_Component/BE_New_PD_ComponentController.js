({
	doInit : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Lead",
            "RecordTypeId" : "0122w0000004LRiAAM"
        });
        createRecordEvent.fire();
	}
})