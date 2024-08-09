const btnList = document.querySelectorAll("button");
const imgCoverList = document.querySelectorAll(".cover");
const divSynopses = document.querySelectorAll(".synopses");

const updateActiveCoverImage = (index) => {
  const imgCoverActive = document.querySelector(".cover--active");
  imgCoverActive.classList.remove("cover--active");
  imgCoverList[index].classList.add("cover--active");
};

const updateActiveSynopses = (index) => {
  const divSynopsesActive = document.querySelector(".synopses--active");
  divSynopsesActive.classList.remove("synopses--active");
  divSynopses[index].classList.add("synopses--active");
};

const updateActiveButton = (button) => {
  const btnActive = document.querySelector(".btn--active");
  btnActive.classList.remove("btn--active");
  button.classList.add("btn--active");
};

btnList.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    updateCoverImage(index);
    updateSynopses(index);
    updateActiveButton(btn);
  });
});
