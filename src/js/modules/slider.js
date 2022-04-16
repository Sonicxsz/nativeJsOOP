export default class Slider{
    constructor(page, btn){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.indexSlid = 1;
        this.btn = document.querySelectorAll(btn);
    }

    showSlide(n){
        if(n < 1){
            this.indexSlid = this.slides.length;
        }
        if(n > this.slides.length){
            this.indexSlid = 1;
        }
        this.slides.forEach(i =>{
            i.classList.add('animated', 'slideInUp');
        })
        try {
            this.hanson.style.opacity = '0';
            if(this.indexSlid == 3){
                this.hanson.classList.add('animated');
                setTimeout(()=>{
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('fadeInUp');
                }, 3000);
            }else{
                this.hanson.classList.remove('fadeInUp');
            }
        } catch (error) {
            
        }
        this.slides.forEach(i =>{
            i.style.display = 'none';
        });

        this.slides[this.indexSlid -1].style.display = 'block';
    }

    plusSlid(n){
        this.showSlide(this.indexSlid +=n);
    }


    render(){
        try {
            this.hanson = document.querySelector('.hanson');
        } catch (error) {
            
        }
        this.btn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                this.plusSlid(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e)=>{
                e.preventDefault();
                this.indexSlid = 1;
                this.showSlide(this.indexSlid);
            });
        });

    }
}