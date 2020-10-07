({
    closeMethodInAuraController : function(component, event, helper) {
        console.log("closeMethodInAuraController");
        $A.get("e.force:closeQuickAction").fire();
    }
})