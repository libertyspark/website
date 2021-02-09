document.getElementById('burgerBtn').addEventListener('click', () => {
  toggleMobileMenu()
});

document.getElementById('mobileNavCloseBtn').addEventListener('click', () => {
  toggleMobileMenu();
})

// show/hide the mobile menu when the burgerBtn is clicked
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}