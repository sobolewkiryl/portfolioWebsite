const navAppear = () => {
  const burger = document.querySelector(".burger-menu");

  const menu = document.querySelector(".links");

  const first = document.getElementById("first");

  const body = document.querySelector("#wrapper");

  const screenWidth = document.documentElement.clientWidth;

  const menuItems = menu.childNodes;

  function showHideMenu() {
    const classlist = menu.classList;

    if (classlist[1] !== "menu-active") {
      menu.classList.toggle("menu-active");
      body.classList.add("overflow-block");
    } else {
      body.classList.remove("overflow-block");
      menu.classList.toggle("menu-active");
    }
  }
  if (screenWidth < 768) {
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", showHideMenu);
    });
  }

  burger.onclick = showHideMenu;

  const navigation = document.querySelector("nav");

  const styckyNav = navigation.offsetTop;

  function stickNavBar() {
    if (window.pageYOffset >= styckyNav) {
      navigation.classList.add("sticky");
    } else {
      navigation.classList.remove("sticky");
    }
  }

  window.onscroll = function () {
    stickNavBar();
  };
};

navAppear();

/*jquery smoothscroll */

$(".links a , .arrow-down a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const direction = this.hash;

    console.log(e.target, direction);

    $("html,body").animate(
      {
        scrollTop: $(direction).offset().top,
      },
      800
    );
  }
});
