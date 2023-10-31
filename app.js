function hideElements(arr) {
  for (const el of arr) {
    if (el.classList.value == "hidden") {
      el.classList.value = "";
    } else {
      el.classList.value = "hidden";
    }
  }
}

function hideContent() {
  const elements = document.querySelectorAll(
    "div.footer__container-nav-item > a"
  );
  hideElements(elements);
  const elementsH4 = document.querySelectorAll(
    "div.footer__container-nav-item > h5"
  );
  hideElements(elementsH4);
}

let count = 0;
window.addEventListener("scroll", (e) => {
  const width = document.body.clientWidth;
  const elementsToAddArr = document.querySelectorAll(".footer__titles");
  if (width <= 600) {
    const hiddenTitle = document.querySelector(".footer__hiddenTitle");
    hiddenTitle.classList.remove("hidden");
    if (count < 1) {
      for (const el of elementsToAddArr) {
        el.innerHTML = `${el.innerHTML}<button class="hideContent" onclick="hideContent()"></button>`;
        count += 1;
      }
    }
  }
});
