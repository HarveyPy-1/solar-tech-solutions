// Javascript codes for responsive Sidebar

// Selecting Element
const sidebarElement = document.querySelector(".sidebar");
const overlayElement = document.querySelector(".overlay");
const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");

// Function to open the sidebar
openMenu?.addEventListener("click", () => {
  overlayElement.classList.add("active");
  sidebarElement.classList.add("active");
});

// Function to close the sidebar
closeMenu?.addEventListener("click", () => {
  overlayElement.classList.remove("active");
  sidebarElement.classList.remove("active");
});

// Function to close the sidebar when overlay clicked
overlayElement?.addEventListener("click", () => {
  overlayElement.classList.remove("active");
  sidebarElement.classList.remove("active");
});

// Close the sidebar when nav links clicked
document.querySelectorAll(".sidebar_links li a").forEach((item) => {
  item.addEventListener("click", () => {
    overlayElement.classList.remove("active");
    sidebarElement.classList.remove("active");
  });
});
