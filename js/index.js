let shop = document.querySelector(".order-lg-2 .btn .fa-shopping-cart");
shop.onclick = () => {
  document.querySelector(".order-lg-2 .btn .position-absolute").style.display = "none";
  document.querySelector(".shopping").classList.toggle("active");
}
// let shopheart = document.querySelectorAll(".order-lg-2 .btn i");
// shopheart.forEach(sh =>{
//     sh.onclick = ()=>{
//         document.querySelectorAll(".order-lg-2 .btn .position-absolute").forEach(o =>{
//             o.style.display= "none"
//         })
//     }
// })




// el collection ama a7wl
// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass('active-filter-btn');
  });
}


// ===================== LOADER ============
function loader(){
  document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(){
  setInterval(loader, 3000);
}
window.onload = fadeOut()