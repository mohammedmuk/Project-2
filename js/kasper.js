// Start  landing page section

let leftArrow = document.querySelector(".fa-angle-left"),
  rightArrow = document.querySelector(".fa-angle-right"),
  bullets = Array.from(document.querySelectorAll(".bullets li")),
  landingSections = Array.from(document.querySelectorAll(".con .the-h1")),
  searchIcon = document.querySelector(".fa-search");

number = 0;

// Create Popup

searchIcon.onclick = function () {
  let seacrhInput = document.createElement("div"),
    popup = document.createElement("div"),
    icon = document.createElement("i"),
    inputSearch = document.createElement("div"),
    theH = document.createElement("h2"),
    theInput = document.createElement("input"),
    theButton = document.createElement("button");
  theInput.setAttribute("placeholder", "Search...");
  icon.className = "far fa-times-circle";
  inputSearch.className = "main-search";
  seacrhInput.className = "search-popup";
  popup.className = "popup";
  theH.textContent = "TYPE HERE TO SEARCH";
  theButton.textContent = "Search";
  inputSearch.appendChild(theH);
  inputSearch.appendChild(theInput);
  popup.appendChild(inputSearch);
  popup.appendChild(icon);
  popup.appendChild(theButton);
  seacrhInput.appendChild(popup);
  document.body.appendChild(seacrhInput);
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-times-circle")) {
    e.target.parentElement.parentElement.remove();
  }
});
// Start The Effect of Slider

rightArrow.onclick = function () {
  number++;
  bullets.forEach((e) => {
    if (number === 3) {
      number = 0;
      e.classList.remove("active");

      bullets[0].classList.add("active");
    } else {
      e.classList.remove("active");

      bullets[number].classList.add("active");
    }
  });

  landingSections.forEach((e) => {
    if (number == 3) {
      e.classList.remove("active");

      landingSections[0].classList.add("active");
    } else {
      e.classList.remove("active");

      landingSections[number].classList.add("active");
    }
  });
};

leftArrow.onclick = function () {
  number--;

  bullets.forEach((e) => {
    if (number === -1) {
      number = 2;
      e.classList.remove("active");

      bullets[2].classList.add("active");
    } else {
      e.classList.remove("active");

      bullets[number].classList.add("active");
    }
  });

  landingSections.forEach((e) => {
    if (number === -1) {
      number = 2;
      e.classList.remove("active");

      landingSections[2].classList.add("active");
    } else {
      e.classList.remove("active");

      landingSections[number].classList.add("active");
    }
  });
};

// End landing page section

// Strat  our design part

let ourDesign = document.querySelector(".our-design "),
  phoneImg = document.querySelector(".our-design .box-img"),
  boxText = document.querySelector(".our-design .box-text");

window.addEventListener("scroll", function () {
  let designPage = ourDesign.clientHeight,
    designOffset = ourDesign.offsetTop,
    windowHeight = window.innerHeight,
    windowY = window.scrollY;

  if (windowY >= designPage + designOffset - windowHeight) {
    phoneImg.style.transform = "translateY(70px)";

    boxText.style.transform = "translateX(25px)";
  }
});

// End our design part

// Start Portfolio part

let theUl = Array.from(document.querySelectorAll(".portfolio li")),
  theImgs = Array.from(document.querySelectorAll(".portfolio .box-img"));

theUl.forEach((li) => {
  li.onclick = function () {
    theUl.forEach((z) => {
      z.classList.remove("active");
      li.classList.add("active");
    });
    theImgs.forEach((img) => {
      if (li.dataset.img == img.dataset.img) {
        img.style.filter = "grayscale(0)";
      } else {
        img.style.filter = "grayscale(200%)";
      }
    });
    if (li.dataset.img == "all") {
      theImgs.forEach((img) => {
        img.style.filter = "grayscale(0)";
      });
    }
  };
});

// End Portfolio part

// Start About Us Part

let aboutUs = document.querySelector(".about-us"),
  boxNumber = Array.from(
    document.querySelectorAll(".about-us .box-number div")
  ),
  status = false;

// theNumber = 0;

window.addEventListener("scroll", function () {
  if (window.scrollY >= aboutUs.offsetTop) {
    if (!status) {
      boxNumber.forEach((number) => numberIncrease(number));
    }

    status = true;
  }
});

function numberIncrease(number) {
  let theNumber = number.dataset.number;

  let count = setInterval(() => {
    number.textContent++;

    if (number.textContent == theNumber) {
      clearInterval(count);
    }
  }, 2000 / theNumber);
}

// End About Us Part

// Start Skills Part

let skills = document.querySelector(".skill-test"),
  progress = document.querySelectorAll(".pro-box .color"),
  proNumber = document.querySelectorAll(".pro-box .color span"),
  status2 = false;

window.addEventListener("scroll", function () {
  let skillsOffset = skills.offsetTop,
    skillsHeight = skills.clientHeight,
    windowHeight = window.innerHeight,
    windowY = window.scrollY;

  if (windowY >= skillsOffset + skillsHeight - windowHeight - 300) {
    progress.forEach((e) => {
      e.style.width = e.dataset.progress;
    });
    if (!status2) {
      proNumber.forEach((number) => numberIncrease2(number));
    }
    status2 = true;
  }
});

function numberIncrease2(number) {
  let theNumber = number.dataset.number;

  let count = setInterval(() => {
    number.textContent++;

    if (number.textContent == theNumber) {
      number.textContent = number.textContent + "%";

      clearInterval(count);
    }
  }, 2000 / theNumber);
}

// End Skills Part

// Start Pricing Part

let pricing = document.querySelector(".pricing"),
  headings = document.querySelectorAll(".pricing .main h1"),
  status3 = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= pricing.offsetTop) {
    if (!status3) {
      headings.forEach((head) => numberIncrease(head));
    }
    status3 = true;
  }
});

// End Pricing Part
