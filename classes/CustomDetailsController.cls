/**
 * @description: controller for the CustomDetails lightning component
 * @author: Alan Petersen
 * @date: 1/07/2018
 */

public with sharing class CustomDetailsController {

    // method to retrieve a JSON string representing the layout
    @AuraEnabled
    public static String getLayout(String layoutName) {
        String serialized = '{}';
        if(!String.isBlank(layoutName)) {
            Metadata.Layout selectedLayout = null;
            List<String> layoutList = new List<String>{
                    layoutName
            };
            List<Metadata.Metadata> components = Metadata.Operations.retrieve(Metadata.MetadataType.Layout, layoutList);
            if (components.size() > 0) {
                selectedLayout = (Metadata.layout) components.get(0);
                serialized = JSON.serialize(selectedLayout);
            }
        }
        return serialized;
    }

}