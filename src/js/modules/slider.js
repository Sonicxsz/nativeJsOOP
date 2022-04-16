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
            i.style.display = 'none';
        });

        this.slides[this.indexSlid -1].style.display = 'block';
    }

    plusSlid(n){
        this.showSlide(this.indexSlid +=n);
    }


    render(){
        this.btn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                this.plusSlid(1);
            });
        });

    }
}