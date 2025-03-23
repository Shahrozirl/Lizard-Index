function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
  
    // Remove previous listeners to avoid duplicates
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.removeEventListener('click', closeMenu); // Ensure no duplicates
      link.addEventListener('click', closeMenu);
    });
  }
  
  function closeMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("open");
  }
  