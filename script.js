function myFunction(x) {
  // Toggle animasi hamburger icon
  x.classList.toggle("change");
  // Toggle dropdown menu
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("navbarOpen");
}

// #### IMPORTANT LATER ####
// function doDropdown()
// #########################

// #### SAME HERE ####
// // Tutup dropdown ketika pengguna melakukan scroll atau geser layar (mobile)
// function closeDropdownOnScroll() {
//   const dropdown = document.getElementById("dropdown");
//   const hamburger = document.querySelector(".hamburger");
//   if (dropdown && dropdown.classList.contains("navbarOpen")) {
//     dropdown.classList.remove("navbarOpen");
//     if (hamburger) hamburger.classList.remove("change");
//   }
// }

// // Dengarkan scroll (desktop dan mobile, pasif untuk performa)
// window.addEventListener("scroll", closeDropdownOnScroll, { passive: true });
// // Dengarkan gerakan sentuh (mobile)
// window.addEventListener("touchmove", closeDropdownOnScroll, { passive: true });
// // Opsional: tutup saat ukuran layar berubah agar state tetap konsisten
// window.addEventListener("resize", closeDropdownOnScroll);
