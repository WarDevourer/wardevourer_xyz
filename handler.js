function linkButtonClick(url) {
    window.location.href = url;
}

function topbarButtonHover(event) {
  var btn = event.currentTarget;
    btn.style.backgroundColor = "black";
}

function topbarButtonOut(event) {
   var btn = event.currentTarget;
    btn.style.backgroundColor = "";
}