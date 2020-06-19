public with sharing class accountController{
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getaccounts(String searchterm,integer noofrecords){
       String search='%'+searchterm+'%';
     
        List<Account> alist=[select id,Name,Website,AccountNumber,Active__c from Account where Name LIKE :search LIMIT :noofrecords ];
        return alist;
    }
    
}