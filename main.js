let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let element = document.querySelector(".current");
let classList = document.querySelector(".classes-list div");

// adding classes to the element
add.onblur = function () {
  let classes = add.value.split(" ");
  for (let i = 0; i < classes.length; i++) {
    element.classList.add(classes[i]);
    let classElement = document.createElement("span");
    let classText = document.createTextNode(`${classes[i]}`);
    classElement.appendChild(classText);
    classElement.classList.add(classes[i]);
    classList.appendChild(classElement);
  }
  add.value = "";
};

remove.onblur = function () {
  let classes = remove.value.split(" ");
  for (let i = 0; i < classes.length; i++) {
    element.classList.remove(classes[i]);
    let classElement = document.querySelector(`.${classes[i]}`);
    classList.removeChild(classElement);
  }
  remove.value = "";
};
