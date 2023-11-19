// Dapatkan semua elemen carousel
let carouselItems = document.querySelectorAll('.carousel-item');
let carouselControls = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');

// Tambahkan event listener untuk mengubah tinggi carousel saat gambar terganti
carouselItems.forEach(item => {
    item.addEventListener('slide.bs.carousel', function () {
        let maxHeight = 0;
        carouselItems.forEach(item => {
            maxHeight = Math.max(maxHeight, item.offsetHeight);
        });
        carouselControls.forEach(control => {
            control.style.height = `${maxHeight}px`;
        });
    });
});

// Tambahkan event listener untuk tombol-tombol kontrol carousel
carouselControls.forEach(control => {
    control.addEventListener('click', function () {
        setTimeout(() => {
            let maxHeight = 0;
            carouselItems.forEach(item => {
                maxHeight = Math.max(maxHeight, item.offsetHeight);
            });
            carouselControls.forEach(control => {
                control.style.height = `${maxHeight}px`;
            });
        }, 0);
    });
});
