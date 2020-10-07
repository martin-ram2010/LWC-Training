public with sharing class ContactController {
    @AuraEnabled(cacheable=true) //The @AuraEnabled(cacheable=true) annotation exposes the method to Lightning components and caches the list of contacts on the client
    public static List<Contact> getContacts(String accId) {
        return [
            SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email
            FROM Contact
            WHERE AccountId = :accId
        ];
    }
    @AuraEnabled
    public static string updateContacts(Object data) {
        List<Contact> contactsForUpdate = (List<Contact>) JSON.deserialize(
            JSON.serialize(data),
            List<Contact>.class
        );
        try {
            update contactsForUpdate;
            return 'Success: contacts updated successfully';
        }
        catch (Exception e) {
            return 'The following exception has occurred: ' + e.getMessage();
        }
    }
} 