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
    description: "Corte recto. Poco usado.",
    image: "lut.png",
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
