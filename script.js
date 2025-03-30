// Данные о домах
const houses = [
  {
    id: 1,
    title: "Современный дом с панорамными окнами",
    description: "Просторный дом с открытой планировкой и большими окнами",
    area: 180,
    mainImage: "images/houses/house1/home1_1.jpg",
    gallery: [
      "images/houses/house1/home1_1.jpg",
      "images/houses/house1/gallery/home1_2.jpg",
      "images/houses/house1/gallery/home1_3.jpg",
      "images/houses/house1/gallery/home1_4.jpg",
    ],
    specifications: [
      {
        title: "Документация 1",
        file: "specifications/houses/house1/1.pdf",
      },
      {
        title: "Документация 2",
        file: "specifications/houses/house1/2.pdf",
      },
      {
        title: "Документация 3",
        file: "specifications/houses/house1/3.pdf",
      },
    ],
    archive: "specifications/houses/house1/specifications.zip",
  },
  {
    id: 2,
    title: "Классический двухэтажный дом",
    description: "Традиционный дом с мансардой и элегантным фасадом",
    area: 220,
    mainImage: "images/houses/house2/home2_1.jpg",
    gallery: [
      "images/houses/house2/home2_1.jpg",
      "images/houses/house2/gallery/home2_2.jpg",
      "images/houses/house2/gallery/home2_3.jpg",
      "images/houses/house2/gallery/home2_4.jpg",
    ],
    specifications: [
      {
        title: "Основная спецификация",
        file: "specifications/houses/house2/1.pdf",
      },
      {
        title: "Электрика",
        file: "specifications/houses/house2/2.pdf",
      },
      {
        title: "Вентиляция",
        file: "specifications/houses/house2/3.pdf",
      },
    ],
    archive: "specifications/houses/house2/specifications.zip",
  },
  // Добавьте остальные дома аналогично
];

// Создание карточек домов
function createHouseCards(filteredHouses = houses) {
  const housesGrid = document.querySelector(".houses-grid");
  housesGrid.innerHTML = "";

  filteredHouses.forEach((house) => {
    const card = document.createElement("div");
    card.className = "house-card";
    card.innerHTML = `
            <img src="${house.mainImage}" alt="${
      house.title
    }" class="house-image">
            <div class="house-info">
                <h2 class="house-title">${house.title}</h2>
                <p class="house-description">${house.description}</p>
                <div class="house-details">
                    <span>Площадь: ${house.area} м²</span>
                </div>
                <button class="view-details" data-house-id="${
                  house.id
                }">Подробнее</button>
                <div class="specifications-list">
                    <a href="${
                      house.archive
                    }" class="download-btn archive-btn" download>Скачать все спецификации</a>
                    ${house.specifications
                      .map(
                        (spec) => `
                        <a href="${spec.file}" class="download-btn" download>${spec.title}</a>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
    housesGrid.appendChild(card);
  });
}

// Создание модального окна
function createModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="swiper">
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div class="modal-info"></div>
        </div>
    `;
  document.body.appendChild(modal);
  return modal;
}

// Инициализация слайдера
function initSwiper(images) {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  swiperWrapper.innerHTML = "";

  images.forEach((image) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<img src="${image}" alt="Фото дома">`;
    swiperWrapper.appendChild(slide);
  });

  return new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Фильтрация домов
function filterHouses() {
  const areaFilter = document.getElementById("area-filter").value;

  let filteredHouses = houses;

  if (areaFilter) {
    filteredHouses = filteredHouses.filter((house) => {
      switch (areaFilter) {
        case "small":
          return house.area <= 150;
        case "medium":
          return house.area > 150 && house.area <= 250;
        case "large":
          return house.area > 250;
      }
    });
  }

  createHouseCards(filteredHouses);
}

// Обработчики событий
document.addEventListener("DOMContentLoaded", () => {
  createHouseCards();
  const modal = createModal();
  let currentSwiper = null;

  // Открытие модального окна
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-details")) {
      const houseId = parseInt(e.target.dataset.houseId);
      const house = houses.find((h) => h.id === houseId);

      if (house) {
        const modalInfo = modal.querySelector(".modal-info");
        modalInfo.innerHTML = `
                    <h2>${house.title}</h2>
                    <p>${house.description}</p>
                    <div class="house-details">
                        <span>Площадь: ${house.area} м²</span>
                    </div>
                `;

        if (currentSwiper) {
          currentSwiper.destroy();
        }
        currentSwiper = initSwiper(house.gallery);

        modal.style.display = "block";
      }
    }
  });

  // Закрытие модального окна
  modal.querySelector(".close-modal").addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Фильтрация
  document
    .getElementById("area-filter")
    .addEventListener("change", filterHouses);

  // Мобильное меню
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Закрытие меню при клике на ссылку
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Закрытие меню при клике вне меню
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".nav-links") &&
      !e.target.closest(".mobile-menu-btn")
    ) {
      mobileMenuBtn.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});
