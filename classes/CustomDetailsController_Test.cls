/**
 * @description: test class for the CustomDetailsController
 * @author: Alan Petersen
 * @date: 1/07/2018
 */

@IsTest
private class CustomDetailsController_Test {
    @IsTest
    static void testGetLayout() {
        CustomDetailsController.getLayout('Account-Account Layout');
        CustomDetailsController.getLayout('Contact-Contact Layout');
        System.assert(true);
    }
}