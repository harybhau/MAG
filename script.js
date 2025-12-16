 // TOGGLE FUNCTIONALITY
    document.querySelector('.hamburger').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('active');
    });
    
    document.querySelector('.sidebar-overlay').addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('active');
    });