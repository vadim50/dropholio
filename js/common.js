var pidar = document.querySelector(".fa-bars");
var show = document.querySelector(".main-menu-show");
var kill = document.querySelector(".fa-times");


   pidar.addEventListener("click", function(event) {
event.preventDefault();
    show.classList.add("menu-show");

});

//      pidar.addEventListener("click", function(event) {
// event.preventDefault();
//     pidar.classList.remove("fa-bars");

// });


  kill.addEventListener("click", function(event) {
event.preventDefault();
    show.classList.remove("menu-show");
});

//     kill.addEventListener("click", function(event) {
// event.preventDefault();
//     pidar.classList.add("fa-bars");
// });