function show() {
    document.getElementById('img1').style.visibility = 'visible';
}
function more_registr(){
	var x = document.getElementById("show_regiser");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction(x) {
  x.classList.toggle("fa-times");
  
}
window.onscroll = function() {scrollFunction()
};
let head = document.getElementById("head_part");
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    head.style. position = "fixed";
    head.style.height = "100px";
    head.style.background = "#ccc";
 }
 else if(document.body.scrollTop == 0) {
   head.style.background = "#fff";

 }
}



