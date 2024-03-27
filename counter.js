let increase = document.getElementById("btninc");
const decrease = document.getElementById("");
const reset = document.getElementById("");
let count = document.getElementById("count");
let counters=0

increase.onclick = function(){
    counters++
    count.textContent=counters;
}