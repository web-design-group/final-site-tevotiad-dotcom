document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("signupModal");
  const openButtons = document.querySelectorAll(".js-open-modal");
  const closeButton = document.querySelector(".modal__close");
  const serviceInput = document.querySelector(".modal-service-input");
  const modalForm = document.querySelector(".modal-form");

  if (!modal) {
    return;
  }

  function openModal(serviceName) {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    if (serviceInput) {
      serviceInput.value = serviceName || "";
    }
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const serviceName = button.dataset.service || "Мастер-класс";
      openModal(serviceName);
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  if (modalForm) {
    modalForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Спасибо! Мы получили вашу заявку и скоро свяжемся с вами.");

      modalForm.reset();
      closeModal();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const reviewsCards = document.getElementById("reviewsCards");
  const prevButton = document.querySelector(".reviews__arrow--prev");
  const nextButton = document.querySelector(".reviews__arrow--next");

  if (!reviewsCards || !prevButton || !nextButton) {
    return;
  }

  const reviews = [
    {
      name: "Екатерина",
      text: "«Пока дочь с биологом в парке, я отдыхала за сборкой букета. Идеальный баланс: ребёнок развивается, мама восстанавливается.»"
    },
    {
      name: "Александр",
      text: "«Лучшее свидание! Создали взаимодополняющие букеты на мастер-классе. Унесли не просто цветы, а общее воспоминание.»"
    },
    {
      name: "Марина",
      text: "«Очень нежное место с внимательными флористами. Букет получился живым, необычным и совсем не похожим на стандартные композиции.»"
    },
    {
      name: "Ольга",
      text: "«Приходили всей семьёй на мастер-класс. Было спокойно, красиво и очень уютно. Дети до сих пор вспоминают свои букеты.»"
    }
  ];

  let currentIndex = 0;

  function getVisibleCount() {
    return window.innerWidth <= 900 ? 1 : 2;
  }

  function renderReviews() {
    const visibleCount = getVisibleCount();

    reviewsCards.innerHTML = "";

    for (let i = 0; i < visibleCount; i++) {
      const reviewIndex = (currentIndex + i) % reviews.length;
      const review = reviews[reviewIndex];

      const card = document.createElement("article");
      card.className = "review-card";

      card.innerHTML = `
        <div class="review-card__top">
          <span></span>
          <h3>${review.name}</h3>
        </div>

        <p>${review.text}</p>
      `;

      reviewsCards.appendChild(card);
    }
  }

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % reviews.length;
    renderReviews();
  });

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    renderReviews();
  });

  window.addEventListener("resize", renderReviews);

  renderReviews();
});