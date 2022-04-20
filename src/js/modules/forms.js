export default class Forms {

    constructor(forms){
        this.forms = document.querySelectorAll(forms);
        this.message = {
            succes: 'Данные отправлены',
            fail: 'Что-то пошло не так',
            waiting: 'Отправляются....',
        };
        this.statusText = document.createElement('div');
    }
    

    async postData(url, body){
        let res = await fetch(url, {
            method: 'POST',
            body: body
        });

        return await res.text();
    }

    onlyEnglish(){
        this.forms.forEach(i =>{
            i.addEventListener('input', (e)=>{
                if(e.target.tagName === 'INPUT' && e.target.getAttribute('data-email')){
                    e.target.value = e.target.value.replace(/[^a-z 0-9 @ /.]/, '');
                }
            });
        })
    }


    sendData(){
        this.forms.forEach(i =>{
            i.addEventListener('submit', (e)=>{
                e.preventDefault();
                let formData = new FormData(i);
                i.parentNode.appendChild(this.statusText);
                this.statusText.style.cssText =`
                    margin-top: 18px;
                    font-size: 25px;
                    color: #e05c91;
                `;
                this.statusText.textContent = this.message.waiting;
                this.postData('../../assets/question.php', formData)
                .then(data =>{
                    this.statusText.textContent = this.message.succes;
                })
                .catch(()=>{
                    this.statusText.textContent = this.message.fail;
                })
                .finally(()=>{
                    setInterval(()=>{
                        i.reset();
                        this.statusText.remove();
                    },4000)
                });
                
            });
        })
    }

    render(){
        this.sendData();
        this.onlyEnglish();
        this.initMask();
        
    }
///mask phone
initMask(){
 

        let setCursorPosition = (pos, elem) =>{
            elem.focus();
        
            if(elem.setSelectionRange){
                elem.setSelectionRange(pos, pos);
            }else if(elem.createTextRange){
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
        
            }
        };
        
        function createMask (e){
        
            let matrix = '+1 (___) ___ __ __',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
        
            if(def.length >= val.length){
                val = def;
            }
        
            this.value = matrix.replace(/./g, function (a){
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        
            });
        
            if(e.type === 'blur'){
                if(this.value.length == 2){
                    this.value = '';
                }
        
            }else{
                setCursorPosition(this.value.length, this);
            }
        };
        
        let inputs = document.querySelectorAll('[name="phone"]');
        inputs.forEach(i =>{
            i.addEventListener('focus', createMask);
            i.addEventListener('blur', createMask);
            i.addEventListener('input', createMask);
        });
        
        }

}