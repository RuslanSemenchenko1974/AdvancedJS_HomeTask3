const revewListEl = document.querySelector(".revewList");
const revewsArr = getRevew();
console.log(revewsArr);

for (let index = 0; index < revewsArr.length; index++) {
  //console.log(index);
  revewListEl.insertAdjacentHTML(
    "beforeEnd",
    `<div id = "product${revewsArr[index].name}">
    <h2 class="Product" >${revewsArr[index].name}</h2>
    <button id = "${index}" class = "btnShowRevew"> Показать отзывы </button>
    </div>`
  );
}

const btnEls = document.querySelectorAll(".btnShowRevew");

for (let index = 0; index < btnEls.length; index++) {
  btnEls[index].addEventListener("click", (event) => {
    const btnOnClick = document.getElementById(`${event.target.id}`);
    const showChoosenProductRevews = revewsArr[event.target.id];

    if (btnOnClick.textContent === "Показать отзывы") {
      btnOnClick.textContent = "Скрыть отзывы";

      const newDiv = document.createElement("div");
      newDiv.className = `${showChoosenProductRevews.name}`;
      btnOnClick.after(newDiv);

      for (let j = 0; j < showChoosenProductRevews.revews.length; j++) {
        newDiv.insertAdjacentHTML(
          "beforeEnd",
          `<div id = "${showChoosenProductRevews.name}_${j}" class = "div${showChoosenProductRevews.name}"> 
            <p class="revewText" >${showChoosenProductRevews.revews[j]}</p>
            <button id = "delete${showChoosenProductRevews.name}_${j}" class = "deleteRevew"> Удалить отзыв </button>
            </div>`
        );

        const deleteItem = document.getElementById(
          `delete${showChoosenProductRevews.name}_${j}`
        );

        deleteItem.addEventListener("click", (event) => {
          const id = `${event.target.id}`.slice(6);
          const arr = id.split("_");

          const item = document.getElementById(id);
          item.remove();

          revewsArr.forEach((element, index) => {
            if (element.name === arr[0]) {
              element.revews.splice(arr[1], 1);
              //*********************************************************************
              const divEls = document.querySelectorAll(
                `.div${showChoosenProductRevews.name}`
              );

              for (let index = 0; index < element.revews.length; index++) {
                divEls[index].id = `${showChoosenProductRevews.name}_${index}`;
              }

              if (element.revews.length === 0) {
                const deleteProduct = document.getElementById(
                  `product${showChoosenProductRevews.name}`
                );
                deleteProduct.remove();
              }
              //*********************************************************************
            }
          });
          const revewsArrNew = revewsArr.filter(
            (item) => item.revews.length !== 0
          );
          change(revewsArrNew);
        });
      }
    } else {
      btnOnClick.textContent = "Показать отзывы";
      const choosenDiv = document.querySelector(
        `.${showChoosenProductRevews.name}`
      );
      choosenDiv.remove();
    }
  });
}
