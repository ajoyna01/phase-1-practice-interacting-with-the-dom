// a counter that increases by 1 each second once the page has loaded
const counterDisplayElem = document.getElementById('counter');
const counterMinusElem = document.getElementById('minus');
const counterPlusElem = document.getElementById('plus');
const counterHeartElem = document.getElementById('heart');
const counterPauseElem = document.getElementById('pause');  
const counterCommentElem = document.getElementById('list');    

let count = 0;
updateCounter();

//event listeners
counterPlusElem.addEventListener("click", ()=> {
    count++;
    updateCounter();

});
counterMinusElem.addEventListener("click", ()=> {
    count--;
    updateCounter();
});
//functions
function updateCounter() {
    counterDisplayElem.innerHTML = count;
}
// can manually increment/decrement the counter using the plus and minus buttons

// can like and individual number of the counter. 

//see the count of the number of 'likes' associated with that number displayed

//pause the counter
    //-pause
    //-disable all buttons except the pause button
    //-switch the label on button from pause to resume

//click the restart button to reset counter and enable buttons

//leavecomments area

//setTimeout
//setInterval
//clearInterval




