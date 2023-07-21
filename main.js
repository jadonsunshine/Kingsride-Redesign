let typingText = document.querySelector('.animated-text');

let nameArray = ["Basic..?","Luxury.?","Deluxe.?"];

let arrayIndex = 1;

function textAnimate(){
    setInterval(timer, 4000);
    function timer(){
        if(
            arrayIndex < nameArray.length){
            typingText.innerHTML = nameArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
         else{
            arrayIndex = 0;
            typingText.innerHTML = nameArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
    }
    
}
textAnimate();
