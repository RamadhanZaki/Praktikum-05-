// Dropdown submenu untuk mobile
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
      var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu > a');
  
      dropdownSubmenus.forEach(function (element) {
        element.addEventListener('click', function (e) {
          e.preventDefault(); // Cegah link jalan
          e.stopPropagation(); // Cegah bubbling ke dropdown utama
  
          var submenu = this.nextElementSibling;
  
          // Tutup semua submenu lain yang terbuka
          document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function (openSubmenu) {
            if (openSubmenu !== submenu) {
              openSubmenu.classList.remove('show');
            }
          });
  
          // Toggle submenu yang diklik
          if (submenu) {
            submenu.classList.toggle('show');
          }
        });
      });
  
      // Tutup semua submenu jika klik di luar dropdown submenu
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown-submenu')) {
          document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function (submenu) {
            submenu.classList.remove('show');
          });
        }
      });
    }
  });
  