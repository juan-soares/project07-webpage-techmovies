const btnList = document.querySelectorAll("button");
const imgCoverList = document.querySelectorAll(".cover");
const divSynopses = document.querySelectorAll(".synopses");

btnList.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const imgCoverActive = document.querySelector(".cover--active");
    imgCoverActive.classList.remove("cover--active");
    imgCoverList[index].classList.add("cover--active");

    const divSynopsesActive = document.querySelector(".synopses--active");
    divSynopsesActive.classList.remove("synopses--active");
    divSynopses[index].classList.add("synopses--active");

    const btnActive = document.querySelector(".btn--active");
    btnActive.classList.remove("btn--active");
    btn.classList.add("btn--active");
  });
});
