/**
 * Created by alan on 1/5/18.
 */
({

    doInit : function(component, event) {
        this.getLayout(component);
        this.setIgnoreList(component);
    },

    //Called from doInit
    getLayout : function(component) {
        var self = this;
        var objectName = component.get("v.sObjectName");
        var layoutName = component.get("v.layoutName");
        if(layoutName) {
            var queryLayoutName = objectName + "-" + layoutName;
            var a = component.get("c.getLayout");
            a.setParams({ layoutName : queryLayoutName});
            a.setCallback(this, this.getLayout_Callback(component));
            $A.enqueueAction(a);
        }
    },
    getLayout_Callback: function(component){
        return(function(response) {
            component.set('v.layoutIsValid', false);
            var state = response.getState();
            if ( state === "SUCCESS") {
                var layoutJson = response.getReturnValue();
                if(layoutJson != null && layoutJson != '{}') {
                    var layout = JSON.parse(layoutJson);
                    component.set('v.layout', layout);
                    component.set('v.layoutIsValid', true);
                }
            }
        });
    },

    setIgnoreList : function(component) {
        var ignoreStr = component.get("v.ignoreSections");
        if(!ignoreStr) {
            ignoreStr = "";
        }
        component.set("v.ignoreSectionList", ignoreStr.split(','));
    }

})