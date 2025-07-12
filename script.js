// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Cek apakah elemennya ada
    if (navToggle && mainNav) {
        // Tambahkan 'event listener' untuk klik pada tombol hamburger
        navToggle.addEventListener('click', function() {
            // Toggle (tambah/hapus) kelas 'active' pada navigasi
            mainNav.classList.toggle('active');
        });
    }

});