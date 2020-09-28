({
	doInit : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Lead",
            "RecordTypeId" : "0122w0000004LRiAAM"
        });
        createRecordEvent.fire();
	},
    
    onSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "Record ID: " + event.getParam("id"),
            "type": "success"
            
        });
        //toastEvent.fire();
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": event.getParam("id"),
          "slideDevName": "related"
        });
        navEvt.fire();
    },
    onSubmit : function(component, event, helper) {
         event.preventDefault();       // stop the form from submitting
        const fields = event.getParam('fields');
        //fields.LastName = 'My Custom Last Name'; // modify a field
        component.find('recordForm').submit(fields);
    },
    
    onError : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Error!",
             "message": event.getParam("message"),
            "type":"error"

        });
        toastEvent.fire();
    }
})