const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const nav = document.getElementsByClassName("nav")[0];

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("display-nav");
  mobileMenu.classList.toggle("display-nav");
});

document.querySelectorAll(".works-preview a").forEach((anc) => {
  anc.onclick = () => {
    document.querySelector(".works-view-modal").style.display = "grid";
    document.querySelector(".works-view-modal iframe").src =
      anc.getAttribute("id") + ".html";
    document.querySelector(".works-view-modal h3").innerHTML =
      anc.getAttribute("id") + " email template";
  };
});

document.querySelector(".works-view-modal span").onclick = () => {
  document.querySelector(".works-view-modal").style.display = "none";
};

const viewBtnDesktop = document.getElementsByClassName("desktop-link")[0];
const viewBtnMobile = document.getElementsByClassName("mobile-link")[0];
const iframe = document.getElementsByClassName("iframe")[0];
const iframeOuterView = document.getElementsByClassName("iframe-outer-view")[0];

viewBtnMobile.addEventListener("click", () => {
  iframe.classList.add("mobile");
  iframe.classList.remove("desktop");
  viewBtnMobile.classList.add("active-view");
  viewBtnDesktop.classList.remove("active-view");
  iframeOuterView.classList.add("mobile");
});

viewBtnDesktop.addEventListener("click", () => {
  iframe.classList.add("desktop");
  iframe.classList.remove("mobile");
  viewBtnDesktop.classList.add("active-view");
  viewBtnMobile.classList.remove("active-view");
  iframeOuterView.classList.remove("mobile");
});
