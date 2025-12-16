const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.sidebar-overlay');

// Toggle sidebar
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close on overlay click
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Close on link click (optional)
document.querySelectorAll('.verity').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});
