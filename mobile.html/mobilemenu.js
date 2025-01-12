  document.addEventListener('DOMContentLoaded',() => {
      const menuIcon = document.getElementById("menu-icon");
      const menu = document.getElementById("menu");

      menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
      }

      )
    }
  )