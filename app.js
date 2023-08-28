const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ASUS",
    price: 80,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "DELL",
    price: 90,
    colors: [
      {
        code: "lightgray",
        img: "./img/dell.png",
      },
      {
        code: "green",
        img: "./img/dell2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Lenovo",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/whiteL.png",
      },
      {
        code: "black",
        img: "./img/blackL.png",
      },
    ],
  },
  {
    id: 4,
    title: "MAC",
    price: 129,
    colors: [
      {
        code: "spacegray",
        img: "./img/mac.png",
      },
      {
        code: "rosegold",
        img: "./img/mac2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hp",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hp.png",
      },
      {
        code: "black",
        img: "./img/hp.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
