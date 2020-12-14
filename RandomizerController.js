({
	clickValidate : function(component, event, helper) {
		var var1 = component.get("v.boundaryVal1");
        var var2 = component.get("v.boundaryVal2");
        var toastEvent = $A.get("e.force:showToast");
        
        var validItem = component.find('itemForm').reduce(function(validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if (validItem && (Math.abs(var1-var2) > 1)) {            
            component.find('btn_random').set('v.disabled', 'false');            
        } 
        else if((Math.abs(var1-var2)) <= 1) {            
                toastEvent.setParams({
                    "title": $A.get("$Label.c.error_name"),
                    "message": $A.get("$Label.c.boundaryVal1") + "\n"
                    		   + $A.get("$Label.c.boundaryVal2") + "\n"
                               + $A.get("$Label.c.error_boundary_rage"),             
                    "type": 'error'
                });
                toastEvent.fire();
        } 
        else {             
                toastEvent.setParams({
                    "title": $A.get("$Label.c.error_name"),
                    "message": $A.get("$Label.c.universal_error_text"),             
                    "type": 'error'
                });
                toastEvent.fire();
         }
	},
    
    clickRandomize : function(component, event, helper) {
    	var var1 = parseInt(component.get("v.boundaryVal1"));
        var var2 = parseInt(component.get("v.boundaryVal2"));        
                
		const a = Math.floor(Math.random() * (var2 - var1 + 1)) + var1;
        component.set("v.outputVal", a);
    }
})