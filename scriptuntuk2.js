var gambarColab = document.querySelectorAll(".gambarColab");
var yangdidonate = document.getElementById("yangdidonate");

for (var i = 0; i < gambarColab.length; i++) {
    gambarColab[i].addEventListener("click", function() {
        sessionStorage.setItem('gambar', this.src);
    });
}

var gambarSrc = sessionStorage.getItem('gambar');
if (gambarSrc) {
    yangdidonate.src = gambarSrc;
}

