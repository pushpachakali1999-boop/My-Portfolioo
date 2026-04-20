// function toggleMenu(){
//     document.getElementById("navLinks").classList.toggle("active");
// }

// document.querySelectorAll("nav a").forEach(link=>{
//     link.addEventListener("click",function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href"))
//         .scrollIntoView({behavior:"smooth"});
//     })
// })<script>
// function showMessage() {
//     document.getElementById("msg").innerHTML = "Message sent successfully!";
      
// }

// </script>


function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("show");
}

// Smooth scroll
document.querySelectorAll("nav a").forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({behavior:"smooth"});
    });
});