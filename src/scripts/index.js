const imgCoverList = document.querySelectorAll(".cover");
const divSynopses = document.querySelectorAll(".synopses");
const btnList = document.querySelectorAll("button");

const updateActiveElement = (elementClass, elementList, elementIndex) => {
  const activeElement = document.querySelector(`.${elementClass}--active`);
  activeElement.classList.remove(`${elementClass}--active`);
  elementList[elementIndex].classList.add(`${elementClass}--active`);
};

btnList.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    updateActiveElement("cover", imgCoverList, index);
    updateActiveElement("synopses", divSynopses, index);
    updateActiveElement("btn", btnList, index);
  });
});
