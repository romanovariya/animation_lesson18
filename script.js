'use strict';

const smileBtn = document.getElementById('smileBtn');
const smile =  document.getElementById('smile');
const reset = document.getElementById('reset');
smile.style.width = "50px";

let start = true;
let pause = true;
let requestId;

smileBtn.addEventListener('click', () => {
    let width = parseFloat(smile.style.width);

    const changeSize = () => {
        let startTime = new Date().getTime();
        const resizeSmile = () => {
            
            let now = new Date().getTime();
            let newWidth = (width + ((now - startTime) / 1000) * 30);
            smile.style.width = newWidth + "px";

            if (newWidth < window.screen.width) {
                requestId = requestAnimationFrame(resizeSmile);
            }

        };
        resizeSmile();  
    };

    if (start === true) {
        start = false;
        pause = false;
        changeSize();
    } else if (start === false && pause === false) {
        cancelAnimationFrame(requestId);
        pause = true;
    }
    else if (start === false && pause === true) {
        changeSize();
        pause = false;
    }
    
});

reset.addEventListener('click', () => {
    smile.style.width = "50px";
    start = true;
    cancelAnimationFrame(requestId);
});
