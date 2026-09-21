document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close-btn")[0];
    const cards = document.querySelectorAll(".kegiatan-card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const img = this.querySelector("img");
            const subTitle = this.closest('.sub-kegiatan').querySelector('.sub-title').innerText;
            
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = subTitle + " (" + img.alt + ")";
        });
    });

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
    console.log("Website SEPRAGA Berhasil Dimuat!");
});
document.addEventListener("DOMContentLoaded", function () {
    // Menandai menu aktif otomatis sesuai halaman yang dibuka
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add("active");
        }
    });
});