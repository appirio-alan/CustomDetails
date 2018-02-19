/**
 * Created by alan on 1/5/18.
 */
({
    doInit: function(component, event, helper) {
        var list = component.get("v.list");
        var elem = component.get("v.element");
        var compareType = component.get("v.compareType");
        var condition = list.indexOf(elem) >= 0;
        if(compareType === "exclude") {
            condition = !condition;
        }
        component.set("v.condition", condition);
    }
})