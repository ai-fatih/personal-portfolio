'use strict';



// element toggle function
/* const elementToggleFunc = function (elem) { elem.classList.toggle("active"); } */



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
/* const sidebarBtn = document.querySelector("[data-sidebar-btn]"); */

// sidebar toggle functionality for mobile
/* sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); }); */



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
/* const modalCloseBtn = document.querySelector("[data-modal-close-btn]"); */
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
/* const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
} */

// add click event to all modal items
/* for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

} */

// add click event to modal close button
/* modalCloseBtn.addEventListener("click", testimonialsModalFunc); */
/* overlay.addEventListener("click", testimonialsModalFunc); */



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close-menu');
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Функция для управления видимостью меню и крестика
const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        closeButton.style.display = 'flex';
    } else {
        closeButton.style.display = 'none';
    }
};
burgerIcon.addEventListener('click', () => {
    toggleMenu();
});
closeButton.addEventListener('click', () => {
    toggleMenu();
}); 
  
function handleNavigation(event) {
  event.preventDefault();

  const clickedLink = event.currentTarget;
  const targetPage = clickedLink.dataset.navLinkName;

  // Убираем активность со всех ссылок и страниц
  navigationLinks.forEach(link => link.classList.remove('active'));
  pages.forEach(page => page.classList.remove('active'));

  // Активируем все ссылки с таким же navLinkName
  document.querySelectorAll(`.navbar-link[data-nav-link-name="${targetPage}"]`)
    .forEach(link => link.classList.add('active'));

  // Активируем целевую страницу
  pages.forEach(page => {
    if (page.dataset.page === targetPage) {
      page.classList.add('active'); 
    }
  });

  // Скроллим вверх
  window.scrollTo(0, 0);
  mobileMenu.classList.contains('active')?mobileMenu.classList.remove('active'):''
 
}

// Вешаем обработчик на все ссылки
navigationLinks.forEach(link => {
  link.addEventListener('click', handleNavigation);
});

// Если нужно при загрузке синхронизировать:
function syncMenus() {
  const activeLink = document.querySelector('.navbar-link.active');
  if (activeLink) {
    const linkName = activeLink.dataset.navLinkName;
    document.querySelectorAll(`.navbar-link[data-nav-link-name="${linkName}"]`)
      .forEach(link => link.classList.add('active'));

    pages.forEach(page => {
      page.classList.toggle('active', page.dataset.page === linkName);
    });
  }
}

syncMenus();