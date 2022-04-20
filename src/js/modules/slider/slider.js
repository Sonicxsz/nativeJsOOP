export default class Slider{
    constructor({container = null, btn =null, next =null, prev =null,
         activeClass = '', animate, autoplay} = {}){
        this.container = document.querySelector(container);
        try{this.slides = this.container.children;}catch(e){}
        this.indexSlid = 1;
        this.prev = document.querySelectorAll(prev);
        this.next = document.querySelectorAll(next);
        this.btn = document.querySelectorAll(btn);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }

}