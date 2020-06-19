import { LightningElement, wire, track } from 'lwc';
import getaccounts from '@salesforce/apex/accountController.getaccounts';
export default class Assignement1 extends LightningElement {

    @track searchkey ;
    @track numberofrecords;
    @track myaccounts;
    @track copiedaccounts;
    @track error;
    @track filterDataOperation;

    handleInput(event){
       if(event.target.name=='Name'){
             this.searchkey=event.target.value;
             console.log(this.searchkey);
       }else if(event.target.name=='RecordNumber'){
             this.numberofrecords=event.target.value;
             console.log(this.numberofrecords);
       }else if(event.target.name=='SearchFilterText'){
               this.filterDataOperation(event.target.value);
       }
    }
      
    handleSearchOperation(){
        
        getaccounts({searchterm: this.searchkey, noofrecords: this.numberofrecords})
        .then(result => {this.myaccounts=result;this.copiedaccounts=[...this.myaccounts];})
        .catch(error => this.error=error);
         
    }
    filterDataOperation(filtertext){
        console.log(filtertext);
        //this.copiedaccounts=this.myaccounts.filter(temp => temp.Name.includes(filtertext));
        console.log(this.copiedaccounts);
    }   
}