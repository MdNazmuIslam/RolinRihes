
// navbar sidebar close and open function
 var navopen = document.querySelector(".navbar-toggler .open");
 var navclose = document.querySelector(".navbar-toggler .close");
 var primarynavbar = document.querySelector("#primarynavbar");

 navopen.addEventListener("click", function(){
   primarynavbar.classList.add("show");
   navopen.style.display="none";
   navclose.style.display="block"
 });
 navclose.addEventListener("click", function(){
  primarynavbar.classList.remove("show");
  navopen.style.display="block";
  navclose.style.display="none";
});
