// Данные о домах
const houses = [
  {
    id: 1,
    title: "Современный дом с одним этажом",
    description: "от 40 000 рублей за кв.м",
    area: 166,
    mainImage: "images/houses/house1/home1_1.jpg",
    gallery: [
      "images/houses/house1/home1_1.jpg",
      "images/houses/house1/gallery/home1_2.jpg",
      "images/houses/house1/gallery/home1_3.jpg",
      "images/houses/house1/gallery/home1_4.jpg",
    ],
    specifications: [
      {
        title: "План помещений с покрытиями",
        file: "specifications/houses/house1/1.pdf",
      },
      {
        title: "План с росстановкой мебели",
        file: "specifications/houses/house1/2.pdf",
      },
      {
        title: "Технико экономические показатели",
        file: "specifications/houses/house1/3.pdf",
      },
    ],
    archive: "specifications/houses/house1/specifications.zip",
  },
  {
    id: 2,
    title: "Классический двухэтажный дом",
    description: "от 40 000 рублей за кв.м",
    area: 375,
    mainImage: "images/houses/house2/home2_1.jpg",
    gallery: [
      "images/houses/house2/home2_1.jpg",
      "images/houses/house2/gallery/home2_2.jpg",
      "images/houses/house2/gallery/home2_3.jpg",
      "images/houses/house2/gallery/home2_4.jpg",
    ],
    specifications: [
      {
        title: "План первого этажа",
        file: "specifications/houses/house2/1.pdf",
      },
      {
        title: "План второго этажа ",
        file: "specifications/houses/house2/2.pdf",
      },
      {
        title: "Технико-экономические показатели",
        file: "specifications/houses/house2/3.pdf",
      },
    ],
    archive: "specifications/houses/house2/specifications.zip",
  },
  {
    id: 3,
    title: "Классический двухэтажный дом",
    description: "от 40 000 рублей за кв.м",
    area: 227,
    mainImage: "images/houses/house3/home3_1.jpg",
    gallery: [
      "images/houses/house3/home3_1.jpg",
      "images/houses/house3/gallery/home3_2.jpg",
      "images/houses/house3/gallery/home3_3.jpg",
      "images/houses/house3/gallery/home3_4.jpg",
    ],
    specifications: [
      {
        title: "План первого этажа",
        file: "specifications/houses/house2/1.pdf",
      },
      {
        title: "План второго этажа ",
        file: "specifications/houses/house2/2.pdf",
      },
      {
        title: "Экспликация",
        file: "specifications/houses/house2/3.pdf",
      },
    ],
    archive: "specifications/houses/house2/specifications.zip",
  },
  {
    id: 4,
    title: "Классический двухэтажный дом",
    description: "от 40 000 рублей за кв.м",
    area: 227,
    mainImage: "images/houses/house4/home4_1.jpg",
    gallery: [
      "images/houses/house4/home4_1.jpg",
      "images/houses/house4/gallery/home4_2.jpg",
      "images/houses/house4/gallery/home4_3.jpg",
      "images/houses/house4/gallery/home4_4.jpg",
    ],
    specifications: [
      {
        title: "План первого этажа",
        file: "specifications/houses/house2/1.pdf",
      },
      {
        title: "План второго этажа ",
        file: "specifications/houses/house2/2.pdf",
      },
      {
        title: "Технико-экономические показатели",
        file: "specifications/houses/house2/3.pdf",
      },
    ],
    archive: "specifications/houses/house2/specifications.zip",
  },
  {
    id: 5,
    title: "Классический одноэтажный дом",
    description: "от 40 000 рублей за кв.м",
    area: 126,
    mainImage: "images/houses/house5/home5_1.jpg",
    gallery: [
      "images/houses/house5/home5_1.jpg",
      "images/houses/house5/gallery/home5_2.jpg",
      "images/houses/house5/gallery/home5_3.jpg",
    ],
    specifications: [
      {
        title: "План первого этажа",
        file: "specifications/houses/house2/1.pdf",
      },
      {
        title: "Технико-экономические показатели",
        file: "specifications/houses/house2/3.pdf",
      },
    ],
    archive: "specifications/houses/house2/specifications.zip",
  },
  {
    id: 6,
    title: "Классический двухэтажный дом",
    description: "от 40 000 рублей за кв.м",
    area: 192,
    mainImage: "images/houses/house6/home6_1.jpg",
    gallery: [
      "images/houses/house2/home6_1.jpg",
      "images/houses/house6/gallery/home6_2.jpg",
      "images/houses/house6/gallery/home6_3.jpg",
      "images/houses/house6/gallery/home6_4.jpg",
    ],
    specifications: [
      {
        title: "План первого этажа",
        file: "specifications/houses/house2/1.pdf",
      },
      {
        title: "План второго этажа ",
        file: "specifications/houses/house2/2.pdf",
      },
      {
        title: "Технико-экономические показатели",
        file: "specifications/houses/house2/3.pdf",
      },
    ],
    archive: "specifications/houses/house2/specifications.zip",
  },
  {
    id: 7,
    title: "Классический двухэтажный дом",
    description: "от 40 000 рублей за кв.м",
    area: 230,
    mainImage: "images/houses/house7/home7_1.jpg",
    gallery: [
      "images/houses/house7/home7_1.jpg",
      "images/houses/house7/gallery/home7_2.jpg",
      "images/houses/house7/gallery/home7_3.jpg",
      "images/houses/house7/gallery/home7_4.jpg",
    ],
    specifications: [
      {
        title: "План первого этажа",
        file: "specifications/houses/house2/1.pdf",
      },
      {
        title: "План второго этажа ",
        file: "specifications/houses/house2/2.pdf",
      },
      {
        title: "Технико-экономические показатели",
        file: "specifications/houses/house2/3.pdf",
      },
    ],
    archive: "specifications/houses/house2/specifications.zip",
  },
  {
    id: 8,
    title: "Классический двухэтажный дом",
    description: "от 40 000 рублей за кв.м",
    area: 208,
    mainImage: "images/houses/house8/home8_1.jpg",
    gallery: [
      "images/houses/house2/home8_1.jpg",
      "images/houses/house8/gallery/home8_2.jpg",
      "images/houses/house8/gallery/home8_3.jpg",
      "images/houses/house8/gallery/home8_4.jpg",
    ],
    specifications: [
      {
        title: "План первого этажа",
        file: "specifications/houses/house2/1.pdf",
      },
      {
        title: "План второго этажа ",
        file: "specifications/houses/house2/2.pdf",
      },
      {
        title: "Технико-экономические показатели",
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

// Функция для загрузки и отображения PDF
async function loadPDFPresentation() {
  const canvas = document.getElementById("pdf-canvas");
  const context = canvas.getContext("2d");
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");
  const pageNumSpan = document.getElementById("page-num");

  let pdf = null;
  let currentPage = 1;
  let totalPages = 0;

  try {
    // Загружаем PDF файл
    const loadingTask = pdfjsLib.getDocument("presentations/presentation.pdf");
    pdf = await loadingTask.promise;
    totalPages = pdf.numPages;

    // Обновляем отображение номера страницы
    pageNumSpan.textContent = `${currentPage} / ${totalPages}`;

    // Обновляем состояние кнопок
    updateNavigationButtons();

    // Рендерим первую страницу
    await renderPage(currentPage);
  } catch (error) {
    console.error("Ошибка при загрузке PDF:", error);
  }

  // Функция для рендеринга страницы
  async function renderPage(pageNumber) {
    try {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.5 });

      // Устанавливаем размеры canvas
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Рендерим страницу
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext);

      // Обновляем отображение номера страницы
      pageNumSpan.textContent = `${pageNumber} / ${totalPages}`;

      // Обновляем состояние кнопок
      updateNavigationButtons();
    } catch (error) {
      console.error("Ошибка при рендеринге страницы:", error);
    }
  }

  // Функция для обновления состояния кнопок навигации
  function updateNavigationButtons() {
    prevButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= totalPages;
  }

  // Обработчики событий для кнопок навигации
  prevButton.addEventListener("click", async () => {
    if (currentPage > 1) {
      currentPage--;
      await renderPage(currentPage);
    }
  });

  nextButton.addEventListener("click", async () => {
    if (currentPage < totalPages) {
      currentPage++;
      await renderPage(currentPage);
    }
  });
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

  // Загружаем PDF при загрузке страницы
  loadPDFPresentation();
});
