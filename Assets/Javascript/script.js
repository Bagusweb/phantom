/*=============== Change Background Header ===============*/
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
}

window.addEventListener("scroll", scrollHeader);

/*=============== Set To Active Link When Scrolled ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.navbar__container a[href*=${sectionId}]`).classList.add("active-link");
    } else {
      document.querySelector(`.navbar__container a[href*=${sectionId}]`).classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== Toggle Accordion When Clicked ===============*/
const accordionItems = document.querySelectorAll(".features__accordion-item");

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".features__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".features__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

/*=============== Creating Function For Looping Elements With Dynamic Contents ===============*/
function loopElements(data, container, child) {
  let value = ``;

  data.forEach((...item) => {
    value += child(...item);
  });

  container.innerHTML = value;
}

/*=============== Creating Function For Truncating Description ===============*/
function truncateString(string) {
  const length = 70;

  return string.length > length ? string.substring(0, length) + " ..." : string;
}

/*=============== Creating Function For Filtering Categories ===============*/
const allButton = document.getElementById("all-products");
const popularButton = document.getElementById("popular-products");
const newButton = document.getElementById("new-products");

allButton.addEventListener("click", () => {
  popularButton.classList.remove("active");
  newButton.classList.remove("active");
  allButton.classList.add("active");

  showMoreButton.textContent = "Show More";
  showMoreButton.classList.remove("less");

  return loopElements(productsData, productsContainer, productsCard);
});

popularButton.addEventListener("click", () => {
  allButton.classList.remove("active");
  newButton.classList.remove("active");
  popularButton.classList.add("active");

  showMoreButton.textContent = "Show More";
  showMoreButton.classList.remove("less");

  const popularData = productsData.filter(({ category }) => category === "Popular Products");

  return loopElements(popularData, productsContainer, productsCard);
});

newButton.addEventListener("click", () => {
  allButton.classList.remove("active");
  popularButton.classList.remove("active");
  newButton.classList.add("active");

  showMoreButton.textContent = "Show More";
  showMoreButton.classList.remove("less");

  const newData = productsData.filter(({ category }) => category === "New Products");

  return loopElements(newData, productsContainer, productsCard);
});

/*=============== Creating Function For Time Since ===============*/
function timeSince(date) {
  const intervals = [
    { label: "Year", seconds: 31536000 },
    { label: "Month", seconds: 2592000 },
    { label: "Day", seconds: 86400 },
    { label: "Hour", seconds: 3600 },
    { label: "Minute", seconds: 60 },
    { label: "Second", seconds: 1 },
  ];
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const interval = intervals.find((i) => i.seconds < seconds);
  const count = Math.floor(seconds / interval.seconds);

  return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
}

/*=============== Calling The Function to Loop into Products Section and Passing Some Arguments ===============*/
const productsContainer = document.getElementById("products-container");

const productsData = [
  {
    img: "./Assets/Images/products-1.png",
    prices: "$1279,17",
    category: "New Products",
    title: "Phantom ION RXZ10",
    description: "Introducing Smartphone with the most powerfull camera and smooth screen",
    href: "./Assets/pages/buy-pages/buy-1.html",
  },
  {
    img: "./Assets/Images/products-2.png",
    prices: "$1211,84",
    category: "Popular Products",
    title: "Phantom Spectrum Z1",
    description: "Most popular Gaming Phones with high processor performance and smooth refresh rate screen",
    href: "./Assets/pages/buy-pages/buy-2.html",
  },
  {
    img: "./Assets/Images/products-3.png",
    prices: "$1144,51",
    category: "Popular Products",
    title: "Phantom Spectrum X9",
    description: "Most powerfull with high performance makes your gaming experiences is more enjoyable",
    href: "./Assets/pages/buy-pages/buy-3.html",
  },
  {
    img: "./Assets/Images/products-4.png",
    prices: "$740,61",
    category: "New Products",
    title: "Phantom RGX T9",
    description: "Gaming Smartphones with high specifications for gaming needed with affordable prices",
    href: "./Assets/pages/buy-pages/buy-4.html",
  },
  {
    img: "./Assets/Images/products-5.png",
    prices: "$673,28",
    category: "Popular Products",
    title: "Phantom PRO 12",
    description: "Introducing Smartphone with the most smooth camera and great result of photos",
    href: "./Assets/pages/buy-pages/buy-5.html",
  },
  {
    img: "./Assets/Images/products-6.png",
    prices: "$471,30",
    category: "Popular Products",
    title: "Phantom XS Series",
    description: "First releases of Phantom Smartphones with enough specifications and cheap prices",
    href: "./Assets/pages/buy-pages/buy-6.html",
  },
];

const moreProductsData = [
  ...productsData,
  {
    img: "./Assets/Images/products-7.png",
    prices: "$404,57",
    category: "New Products",
    title: "Phantom Prime X12",
    description: "Most powerfull with high performance makes your gaming experiences is more enjoyable",
    href: "./Assets/pages/buy-pages/buy-7.html",
  },
  {
    img: "./Assets/Images/products-8.png",
    prices: "$472,01",
    category: "Popular Products",
    title: "Phantom Reaver Z10",
    description: "Most popular Gaming Phones with high processor performance and smooth refresh rate screen",
    href: "./Assets/pages/buy-pages/buy-8.html",
  },
  {
    img: "./Assets/Images/products-9.png",
    prices: "$269,69",
    category: "New Products",
    title: "Phantom Minima S7",
    description: "Introducing Smartphone with the most powerfull camera and smooth screen",
    href: "./Assets/pages/buy-pages/buy-9.html",
  },
  {
    img: "./Assets/Images/products-10.png",
    prices: "$188,73",
    category: "Popular Products",
    title: "Phantom Nitro Z8",
    description: "Introducing Smartphone with the most smooth camera and great result of photos",
    href: "./Assets/pages/buy-pages/buy-10.html",
  },
  {
    img: "./Assets/Images/products-11.png",
    prices: "$181,99",
    category: "New Products",
    title: "Phantom Horizon H30",
    description: "Gaming Smartphones with high specifications for gaming needed with affordable prices",
    href: "./Assets/pages/buy-pages/buy-11.html",
  },
  {
    img: "./Assets/Images/products-12.png",
    prices: "$114,58",
    category: "Popular Products",
    title: "Phantom Infinity GX",
    description: "Most powerfull with high performance makes your gaming experiences is more enjoyable",
    href: "./Assets/pages/buy-pages/buy-12.html",
  },
];

const productsCard = ({ img, prices, category, title, description, href }) => `
    <article class="products__card">
      <img src="${img}" alt="Products Image" class="products__img" />

      <div class="products__data">
        <div class="products__data-prices">
          <h3 class="products__price">${prices}</h3>
          <span class="products__category">${category}</span>
        </div>
        <h2 class="products__title">${title}</h2>
        <p class="products__description">${truncateString(description)}</p>
        <div class="products__buttons">
          <a href="${href}" class="products__buy-button">
            Buy
            <i class="bx bx-cart"></i>
          </a>
          <a href="${href}" class="products__view-button">
            View More
            <i class="bx bx-chevron-right"></i>
          </a>
        </div>
      </div>
    </article>`;

loopElements(productsData, productsContainer, productsCard);

/*=============== Creating Function For Showing More Products ===============*/
const showMoreButton = document.querySelector(".show-more__button");

showMoreButton.addEventListener("click", () => {
  if (!showMoreButton.classList.contains("less")) {
    showMoreButton.textContent = "Show Less";
    showMoreButton.classList.add("less");

    popularButton.classList.remove("active");
    newButton.classList.remove("active");
    allButton.classList.add("active");

    loopElements(moreProductsData, productsContainer, productsCard);
  } else {
    showMoreButton.textContent = "Show More";
    showMoreButton.classList.remove("less");

    popularButton.classList.remove("active");
    newButton.classList.remove("active");
    allButton.classList.add("active");

    loopElements(productsData, productsContainer, productsCard);
  }
});

/*=============== Calling The Function to Loop into Article Section and Passing Some Arguments ===============*/
const articleContainer = document.getElementById("article-container");

const articleData = [
  {
    img: "Assets/Images/article-1.jpg",
    uploadedAt: new Date("September 08, 2022 13:24:00"),
    title: "Pre-Order of Phantom Fold4 5G and Flip4 5G",
    description: "Along with the announcement of the Phantom Fold4 5G and Phantom Flip4 5G, We also announced prices and availability for the Phantom Fold4 5G device in Indonesia.",
  },
  {
    img: "Assets/Images/article-2.jpg",
    uploadedAt: new Date("September 06, 2022 08:24:00"),
    title: "4 Phantom Smartphones Recommendations",
    description: "This year our company has developed many smartphones but if you are confused this article will help you find the best phantom smartphone so far",
  },
  {
    img: "Assets/Images/article-3.jpg",
    uploadedAt: new Date("September 03, 2022 15:21:00"),
    title: "Phantom PRO 11 Review: Battery 6000mAh, Storage 128GB",
    description: "The new smartphone Phantom Pro 11 was recently released and has entered the market in many countries this time we will review the results of our company's smartphone...",
  },
  {
    img: "Assets/Images/article-4.jpg",
    uploadedAt: new Date("August 28, 2022 09:18:00"),
    title: "7 Phantom smartphones features you need to knows",
    description: "To make it easier for users and to be able to use the potential of the Phantom smartphone well, we will provide some suggestions regarding the features...",
  },
  {
    img: "Assets/Images/article-5.jpg",
    uploadedAt: new Date("August 23, 2022 22:54:00"),
    title: "How to boosts game performance on Phantom smartphone",
    description: "Some Phantom smartphones have been given advanced system features to make the user's gaming performance smoother and more comfortable",
  },
  {
    img: "Assets/Images/article-6.jpg",
    uploadedAt: new Date("August 19, 2022 18:44:00"),
    title: "Tips to make the Phantom Smartphone more durable",
    description: "Some of the following tips can make you users of phantom smartphones can be more durable and not easily damaged",
  },
];

const articleCard = ({ img, uploadedAt, title, description }) => `
    <article class="article__card">
      <div class="article__image">
        <img src="${img}" alt="Article Image" class="article__img" />
      </div>

      <div class="article__data">
        <div class="article__stats">
          <div class="article__stats-data">
            <div class="article__reaction">
              <i class="bx bx-time"></i>
              <span>${timeSince(uploadedAt)}</span>
            </div>
            <div class="article__reaction">
              <i class="bx bx-show"></i>
              <span>${Math.floor(Math.random() * (1000 - 100) + 100) / 10}K</span>
            </div>
          </div>

          <div class="article__reaction article__comment">
            <i class="bx bx-comment"></i>
            <span>${Math.floor(Math.random() * 101) + 1}</span>
          </div>
        </div>
        <h2 class="article__title">${title}</h2>
        <p class="article__description">${truncateString(description)}</p>
        <button class="button article__button">Read More</button>
      </div>
    </article>
`;

loopElements(articleData, articleContainer, articleCard);
