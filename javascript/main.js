var bttntop = document.getElementById("wow");
window.onscroll = function() {

if  (document.documentElement.scrollTop > 700){
bttntop.style.display = "block";  }
else {
    bttntop.style.display = "none";
}

} 
bttntop.addEventListener("click", function( ) {

window.scroll ({
    top: 0,
    left: 0,
    behavior: 'smooth' });
});


