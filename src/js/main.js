/*~~~~~~~~~~~~~~~ Home TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("close-icon");
const navLink = document.querySelectorAll(".nav-link");

menuIcon.addEventListener("click", function () {
  navMenu.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
  navMenu.classList.add("hidden");
});

navLink.forEach((link) =>
  link.addEventListener("click", function () {
    navMenu.classList.add("hidden");
  })
);
/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs ul li");
const allItem = document.querySelectorAll(".menu-item");
const food = document.querySelectorAll(".food");
const snack = document.querySelectorAll(".snack");
const drink = document.querySelectorAll(".drink");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    const tabVal = tab.getAttribute("data-tabs");

    allItem.forEach((item) => {
      item.style.display = "none";
    });

    if (tabVal == "food") {
      food.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal == "snack") {
      snack.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal == "drink") {
      drink.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      allItem.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/

const html = document.querySelector("html");
const modeBtn = document.getElementById("mode-toggle");

const darkMode = () => {
  html.classList.add("dark");
  modeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
};

const lightMode = () => {
  html.classList.remove("dark");
  modeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
};

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

modeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondry-color");
  } else {
    header.classList.remove("border-b", "border-secondry-color");
  }
};

window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const nanLinks = document.querySelectorAll("nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLink.forEach((item) => {
    item.classList.remove("text-secondry-color");
    if (item.href.includes(current)) {
      item.classList.add("text-secondry-color");
    }
  });
};

window.addEventListener("scroll", activeLink);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home-img");
sr.reveal(".home-content", { origin: "bottom" });
sr.reveal(".category-card", { interval: 300 });
sr.reveal(".promo-card-1", { origin: "left" });
sr.reveal(".promo-card-2", { origin: "right" });
sr.reveal(".about-img", { origin: "bottom" });
sr.reveal(".about-content", { origin: "top" });
sr.reveal(".menu-items", { origin: "left" });
sr.reveal(".customer-review", { origin: "right" });
sr.reveal(".footer");
