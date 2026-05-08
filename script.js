const items = [
  {
    name: "Campera Polo",
    size: "M",
    price: "$20",
    condition: "Buena",
    description: "100% algodón. Mancha en brazo.",
    image: "polo.png",
    sold: false
  },
  {
    name: "Sueter Midway",
    size: "M",
    price: "$50",
    condition: "Excelente",
    description: "100% algodón. Sin uso.",
    image: "midway.png",
    sold: false
  },
  {
    name: "Carpintero Leutthe",
    size: "32",
    price: "$20",
    condition: "Excelente",
    description: "Corte recto. Poco uso.",
    image: "lut.png",
    sold: false
  },
  {
    name: "Jean Lee",
    size: "36",
    price: "$20",
    condition: "Muy bueno",
    description: "Relaxed fit.",
    image: "lee.png",
    sold: false
  },
  {
    name: "Jean Wrangler",
    size: "34",
    price: "$20",
    condition: "Excelente",
    description: "Slim fit.",
    image: "wrangler.png",
    sold: false
  },
  {
    name: "Chomba Polo",
    size: "M",
    price: "$13",
    condition: "Excelente",
    description: "100% algodón. Color salmón.",
    image: "chomba.png",
    sold: false
  },
  {
    name: "Buzo Leutthe",
    size: "S",
    price: "$12",
    condition: "Bueno",
    description: "Levemente decolorado.",
    image: "buzo.png",
    sold: false
  },
  {
    name: "Buzo Elk",
    size: "S",
    price: "$15",
    condition: "Muy bueno",
    description: "Cintura ajustada. Boxy fit.",
    image: "elk.png",
    sold: false
  },
  {
    name: "Mono",
    size: "XXXL",
    price: "$300",
    condition: "Excelente",
    description: "100% mono.",
    image: "mono.png",
    sold: true
  }
];

const grid = document.querySelector("#items-grid");
const template = document.querySelector("#item-template");

if (grid && template) {
  items.forEach((item) => {
    const clone = template.content.cloneNode(true);
    const image = clone.querySelector(".item-image");
    const status = clone.querySelector(".item-status");
    const name = clone.querySelector(".item-name");
    const meta = clone.querySelector(".item-meta");
    const description = clone.querySelector(".item-description");
    const price = clone.querySelector(".item-price");

    if (!image || !status || !name || !meta || !description || !price) {
      return;
    }

    image.src = item.image;
    image.alt = `${item.name} preview`;
    image.style.cursor = "pointer";
    image.addEventListener("click", () => {
      openImagePopup(item.image, item.name);
    });

    status.textContent = item.sold ? "VENDIDA" : "DISPONIBLE";
    status.style.color = item.sold ? "#ff8aa6" : "#7aff9f";
    status.style.borderColor = item.sold ? "#ff8aa6" : "#7aff9f";
    name.textContent = item.name;
    meta.textContent = `${item.size} - ${item.condition}`;
    description.textContent = item.description;
    price.textContent = item.price;

    grid.appendChild(clone);
  });
}

const movingGif = document.querySelector(".gif-bg");
const gifPopup = document.querySelector(".gif-click-popup");
const gifPopupClose = document.querySelector(".gif-popup-close");

if (movingGif) {
  const moveGifRandomly = () => {
    const maxX = Math.max(window.innerWidth - 56, 0);
    const maxY = Math.max(window.innerHeight - 56, 0);
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    movingGif.style.transform = `translate3d(${randomX}px, ${randomY}px, 0)`;
  };

  moveGifRandomly();
  setInterval(moveGifRandomly, 2400);
  window.addEventListener("resize", moveGifRandomly);

  if (gifPopup) {
    movingGif.addEventListener("click", () => {
      gifPopup.classList.add("is-visible");
    });

    gifPopup.addEventListener("click", (event) => {
      if (event.target === gifPopup) {
        gifPopup.classList.remove("is-visible");
      }
    });
  }
}

if (gifPopupClose && gifPopup) {
  gifPopupClose.addEventListener("click", () => {
    gifPopup.classList.remove("is-visible");
  });
}

// Make win95 popup closeable
const win95Popup = document.querySelector(".win95-popup");
const closeButton = document.querySelector(".win95-controls span:last-child");

if (win95Popup && closeButton) {
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", () => {
    win95Popup.style.display = "none";
  });
}

// Image popup functionality
const imagePopup = document.querySelector(".image-popup");
const imagePopupImg = document.querySelector(".image-popup-img");
const imagePopupClose = document.querySelector(".image-popup-close");
const imagePopupOverlay = document.querySelector(".image-popup-overlay");

function openImagePopup(src, alt) {
  if (imagePopup && imagePopupImg) {
    imagePopupImg.src = src;
    imagePopupImg.alt = alt;
    imagePopup.classList.add("is-visible");
  }
}

function closeImagePopup() {
  if (imagePopup) {
    imagePopup.classList.remove("is-visible");
  }
}

if (imagePopupClose) {
  imagePopupClose.addEventListener("click", closeImagePopup);
}

if (imagePopupOverlay) {
  imagePopupOverlay.addEventListener("click", closeImagePopup);
}

// Close image popup with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imagePopup?.classList.contains("is-visible")) {
    closeImagePopup();
  }
});
