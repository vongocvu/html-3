export function Slider(prev, next, slider){
    let count = 0 ;
    prev.addEventListener("click" ,() =>{
        count-- ;
        if(count < 0){
            count = 0;
        }
        handleSlider(count, slider);
    });
    next.addEventListener("click" , () =>{
            count++ ;
            if( count > slider.children.length -1){
                    count = slider.children.length -1 ;
            }

        handleSlider(count , slider);
    });
}
function handleSlider(count, slider){
        slider.style.transform = `translateX(-${
            slider.children[0].offsetWidth * count
        }px)`;
}