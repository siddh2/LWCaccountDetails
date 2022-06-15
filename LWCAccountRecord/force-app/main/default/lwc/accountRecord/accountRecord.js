import { LightningElement, wire } from 'lwc';
import getAccountData from '@salesforce/apex/getApexData.getAccountData'

export default class AccountRecord extends LightningElement {

    
    viewData;
    @wire(getAccountData)
    showAccounts({error,data}){
        if(data)
        {
            this.viewData=data;
            console.log('View Data Here ', data);
        }
        else if(error)
        {
            console.log('Errors ',error);
        }
    }


}