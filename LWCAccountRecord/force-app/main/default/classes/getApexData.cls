public class getApexData {

    //Query account records
    @AuraEnabled(Cacheable=true)
    public static List<account> getAccountData(){
        return [SELECT Id, Name, Phone, Account_Email__c from Account order by CreatedDate LIMIT 10];
    }
    
}
