document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Xử lý sự kiện click vào biểu tượng ☰ để đóng/mở menu
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
