// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get the .cube element
    const cubeElement = document.querySelector(".cube");
    let settimoutCall;
   cubeElement.addEventListener("mouseenter",()=>{
           // Change the animation duration
           let newDuration = `0.5s`; // Your desired new duration (e.g., 2 seconds)
           cubeElement.style.animationDuration = newDuration;
   })
   cubeElement.addEventListener("mouseleave",()=>{
       // Change the animation duration
       clearTimeout(settimoutCall);
       const newDuration = "4s"; // Your desired new duration (e.g., 2 seconds)
       cubeElement.style.animationDuration = newDuration;
   })


  });
  