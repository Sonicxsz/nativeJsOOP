import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/playVideo";
import MiniSlider from './modules/slider/slider-mini';
import Difference from './modules/difference';
import Forms from "./modules/forms";
window.addEventListener('DOMContentLoaded', ()=>{

    const slider = new MainSlider({btn: '.next', container: '.page'});
    slider.render();
    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    const pageModuleSlider = new MainSlider({container: '.moduleapp', btn: '.next', 
        prev: '.prev', next: '.next'});
    pageModuleSlider.render();

    const modulesSlider = new MiniSlider({container: '.modules__content-slider', 
    next: '.modules__info-btns .slick-next', prev: '.modules__info-btns .slick-prev',
        activeClass :'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({container: '.feed__slider', 
    next: '.feed__slider .slick-next', prev: '.feed__slider .slick-prev',
    activeClass :'feed__item-active',
    });
    feedSlider.init();

    const miniSlider = new MiniSlider({container: '.showup__content-slider', next: '.showup__next', prev: '.showup__prev',
    activeClass: 'feed__item-active',
    animate: true
    });
        miniSlider.init();


    new Difference('.officernew', '.officerold', '.officer__card-item').render();

    const server = new Forms('form').render();
});
