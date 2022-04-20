export default class Difference {

    constructor(newOfficer, oldOfficer, items){
        this.newOfficer = document.querySelector(newOfficer);
        this.oldOfficer = document.querySelector(oldOfficer);
       try {
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
       } catch (e) {}
          
       
        this.count = 0;
        
    }

    bindTriggers(officer, items, count){
        officer.querySelector('.plus').addEventListener('click',() =>{
            if(count !== items.length -2){
                items[count].style.display = 'flex';
                items[count].classList.add('fadeIn');
                count++;
            }else{
                items[count].style.display = 'flex';
                items[items.length -1].remove();

            }
        });
    }

    hideTabs(items){
        items.forEach((item, i, arr) =>{
            item.classList.add('animated');
            if(i !== arr.length -1){
                item.style.display = 'none';
            }
        });
       
    }


    render(){
      try {
        this.hideTabs(this.newItems);
        this.hideTabs(this.oldItems);
        this.bindTriggers(this.newOfficer, this.newItems, this.count);
        this.bindTriggers(this.oldOfficer, this.oldItems, this.count);
      } catch (e) {}
    }
}