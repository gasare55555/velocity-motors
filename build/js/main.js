function initApp() {
  const navBar = document.querySelector("header section");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNav = mobileMenu.firstElementChild;
  const menuOptions = mobileMenu.getElementsByTagName("a");
  const menuOption = menuOptions[0];
  const logo = document.getElementById("logo");
  const hamburgerBtn = document.getElementById("hamburger-button");
  const heroCar = document.querySelector("#hero>img");
  
  function setSectionHeight() {
    if (!document.getElementById("height-style")) {
      const heightStyle = document.createElement("style");
      document.head.appendChild(heightStyle);
      heightStyle.id = "height-style";
    }

    document.getElementById("height-style").innerHTML = `
      @media (min-aspect-ratio: 3/2) {
        .section-min-height {
          min-height: calc(100vh - ${navBar.offsetHeight}px);
        }
      }
      @media (max-aspect-ratio: 13/20) {
        .section-min-height {
          min-height: calc(100vh - ${navBar.offsetHeight}px);
        }
      }
    `;

    mobileMenu.style.top = `${navBar.offsetHeight}px`;
    mobileMenu.style.height = `calc(100vh - ${navBar.offsetHeight}px)`;
  }
  
  function setMenuSpacing() {
    if (mobileMenu.offsetHeight) {
      console.log("callback begins...");
  
      for (const option of menuOptions) {
        option.style.paddingBlock = `0px`;
        console.log("resetting padding...");
      }
      const paddingTop = mobileMenu.offsetHeight * 0.055 * 2.5;
      const paddingBottom = mobileMenu.offsetHeight * 0.09 * 2.5;
      const totalHeight = mobileMenu.offsetHeight;
      const usedHeight = mobileNav.offsetHeight + paddingTop + paddingBottom;
  
      if (usedHeight < totalHeight) {
        mobileMenu.style.paddingTop = `${paddingTop}px`;
        mobileMenu.style.paddingBottom = `${paddingBottom}px`;
        const availableHeight = totalHeight - usedHeight;
        const paddingAmount = (availableHeight / menuOptions.length) / 2;
        console.log(totalHeight, usedHeight, availableHeight, menuOptions.length, paddingAmount);
        for (const option of menuOptions) {
          option.style.paddingBlock = `${paddingAmount}px`;
            console.log("setting padding...");
        }
      } 
  
      if (usedHeight >= totalHeight) {
        mobileMenu.style.paddingTop = `${paddingTop}px`;
        mobileMenu.style.paddingBottom = `${paddingBottom}px`;
        const paddingAmount = 3;
        for (const option of menuOptions) {
          option.style.paddingBlock = `${paddingAmount}px`;
            console.log("setting padding...");
        }
      }
    }
  }

  function toggleMenu() {
    hamburgerBtn.classList.toggle("toggle-btn");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden", "animate-close-menu");
      mobileMenu.classList.add("block", "animate-open-menu");
    } else {
      mobileMenu.classList.remove("block", "animate-open-menu");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 400);
      mobileMenu.classList.add("animate-close-menu");  
    } 
  }

  function liftCar () {
    logo.classList.add("[&>img]:animate-lift-car");
    setTimeout(() => {
      logo.classList.remove("[&>img]:animate-lift-car");
    }, 1200); 
  }

  function bendCar() {
    heroCar.classList.remove("animate-bend-car");
    setTimeout(() => {
      heroCar.classList.add("animate-bend-car");
    }, 50);
    
    console.log("animated");
  }

  
  const navBarResize = new ResizeObserver(setSectionHeight);
  const menuOptionResize = new ResizeObserver(setMenuSpacing);

  navBarResize.observe(navBar, {box: "border-box"});
  menuOptionResize.observe(menuOption);
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
  logo.addEventListener("click", liftCar);
  heroCar.addEventListener("click", bendCar);
}

document.addEventListener("DOMContentLoaded", initApp);