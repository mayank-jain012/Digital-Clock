let hour=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let ampm=document.getElementById("ampm");
function updateclock(){
let d=new Date();
let h1=d.getHours();
let m1=d.getMinutes();
let s1=d.getSeconds();
let ap="AM"
if(h1>12){
    h1=h1-12;
    ap="PM"
}
hour.innerText=h1
min.innerText=m1
sec.innerText=s1
ampm.innerText=ap
}
updateclock();

