document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => {
      document.getElementById("navLinks").classList.remove("open");
    })
  );
  