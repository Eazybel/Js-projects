let increase = document.getElementById("btninc");
let decrease = document.getElementById("btndec");
let reset = document.getElementById("btnres");
let count = document.getElementById("count");
let counters=0

increase.onclick = function(){
    counters++
    count.textContent=counters;
}
decrease.onclick = function(){
    counters--
    count.textContent=counters;
}
reset.onclick = function(){
    counters=0
    count.textContent=counters;
}