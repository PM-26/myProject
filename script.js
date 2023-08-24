
document.addEventListener("mousemove" , function(e){
let x=e.clientX;
let y=e.clientY;

document.querySelector("#cursor").style.top=y+"px";

document.querySelector("#cursor").style.left=x+"px";
console.log(x,y);


// document.querySelector("#cursor").style.tranform = `translate(${x}px  ${y}px)`;

})