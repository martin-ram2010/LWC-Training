public with sharing class InvoiceLineItemController {
    @AuraEnabled(cacheable=true)
    public static List<Invoice_Line_Item__c> getInvoiceLineItems(Id invoiceId, String status){
        String query ='SELECT Id, Invoice_Line_Item_Name__c,Invoice_Line_Item_Status__c,Total_Price__c FROM Invoice_Line_Item__c WHERE Invoice__c =:invoiceId';
        if(String.isNotBlank(status))
            query+= ' AND Invoice_Line_Item_Status__c=:status';
        return Database.query(query);
    }
    //To fetch Invoice Line Items for passed Invoices
    @AuraEnabled(cacheable=true)
    public static List<Invoice_Line_Item__c> getINVL(Id invoiceId){
        String query ='SELECT Id, Invoice_Line_Item_Name__c,Invoice_Line_Item_Status__c,Total_Price__c FROM Invoice_Line_Item__c WHERE Invoice__c =:invoiceId';
        return Database.query(query);
    }
    //To delete Invoice Line Items based on provided Id
    @AuraEnabled
    public static void deleteINVL(Id invlId){
        try{
            delete new Invoice_Line_Item__c(Id = invlId);
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    //To fetch Invoice Line Items for passed Invoices
    @AuraEnabled
    public static List<Invoice__c> getAllInvoice(){
        return [SELECT Id,Name, Billing_DateTime__c,Billing_Status__c,Price__c FROM Invoice__c];
    }

}