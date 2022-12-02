//
window.onscroll = function () {
  scrollnav();
};

let widget = document.getElementById("navbar");
let sticky = widget.offsetTop;

function scrollnav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    widget.style.top = "0";
    widget.style.backgroundColor = "#fff";
    widget.style.color = "#2a2a2a";
    widget.style.transition = "top 1s";
    widget.style.boxShadow = "0px 1px 10px rgb(192, 187, 187)";
  } else {
    widget.style.top = "-50px";
    widget.style.backgroundColor = "rgba(0,0,0,0)";
    widget.style.color = "#fff";
    widget.style.boxShadow = "0px 1px 10px rgba(0,0,0,0)";
  }
}

function burger() {
  let dropdown = document.getElementById("burger_menu");
  if (dropdown.style.backgroundColor === "blue") {
    dropdown.style.backgroundColor = "red";
  } else {
    dropdown.style.backgroundColor = "blue";
  }
}
