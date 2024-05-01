// Ambil referensi ke gambar keempat
var yangDiDonate = document.getElementById("yangdidonate");

// Ambil semua elemen dengan kelas 'gambar'
var gambarList = document.querySelectorAll('gambarColab');
// Tambahkan event listener ke setiap elemen
gambarList.forEach(function(gambar) {
  gambar.addEventListener("click", function() {
    gantiGambar(gambar.src);
  });
});

// Fungsi untuk mengganti gambar keempat
function gantiGambar(src) {
  yangDiDonatet.src = src;
}