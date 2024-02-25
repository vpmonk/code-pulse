const dec = document.getElementById('dec');
const r = document.getElementById('r');
const inc = document.getElementById('inc');
const count = document.getElementById('count');
let num = 0;

inc.onclick = function() {
    num++;
    count.textContent = num; 
}

dec.onclick = function() {
    num--;
    count.textContent = num; 
}
r.onclick = function(){
    num=0;
    count.textContent=num;
}