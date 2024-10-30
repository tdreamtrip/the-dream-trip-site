function toggleMenu() {
    document.querySelector(".menu-icon").classList.toggle("active");
    document.querySelector(".dropdown-menu").classList.toggle("active");
  }

  function toggleCountries(event) {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector(".country-list").classList.toggle("active");
    document.querySelector(".arrow").classList.toggle("rotated");
  }