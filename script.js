var navLinks = document.getElementById("navLinks");

function showMenu(){
  console.log("1")
  navLinks.style.right = "0";
}
function hideMenu(){
  console.log("2")
  navLinks.style.right = "-200px";
}


function showthediv(var1) {
  console.log(var1)
  document.getElementsByClassName('show')[0].className='hide';
  document.getElementById(var1).className="show";
}


