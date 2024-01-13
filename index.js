let ct = document.querySelector(".color-and-text").children;
// console.log(ct[0].value);
// let textAreaValue = ct[0].value;
// let colorValue = ct[1].children[0].value;
// console.log(colorValue);
let btn = document.querySelector("button");
let rightContainer = document.querySelector(".right-container-notes");

btn.addEventListener("click", () => {
  let colorValue = ct[1].children[0].value;
  if (ct[0].value === "") {
    alert("please enter some text!!");
    return;
  }
  makeStickyNotes(ct[0].value, colorValue);
  ct[0].value = "";
  document.querySelector(".notesNotAdded").style.display = "none";
  removeStickyNotes();
});
function removeStickyNotes() {
  let btn2 = document.querySelectorAll(".btn2");
  btn2.forEach((singleBtn) => {
    singleBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
}

function makeStickyNotes(text, color) {
  let div = document.createElement("div");
  div.innerHTML = `
    <p>${text}</p>
    <button class="btn2"> X </button>
    `;
  div.style.backgroundColor = color;
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.margin = "1rem";
  div.style.padding = "0.6rem";
  div.style.color = "#fff";
  div.style.fontWeight = "500";
  div.style.overflow = "hidden";
  rightContainer.appendChild(div);
  rightContainer.style.display = "flex";
  rightContainer.style.flexWrap = "wrap";
}
