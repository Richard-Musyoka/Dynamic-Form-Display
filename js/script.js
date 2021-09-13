
window.addEventListener("scroll", (event) => {
    // Get the navbar
    var top = document.getElementById("top-section");
    var nav = document.getElementById("navigation-bar");
    // Get the offset position of the navbar
    var sticky = top.offsetTop;

    let scroll = this.scrollY;
    console.log("scroll y: "+scroll);
    console.log("sticky: "+sticky);

    if (scroll >= sticky) {
        nav.classList.add("sticky");


      } else {
    
        nav.classList.remove("sticky");
      }

    if(scroll > 460){
        nav.style.backgroundColor = "#febd2f";
    }else{
        nav.style.backgroundColor = "";
    } 
});