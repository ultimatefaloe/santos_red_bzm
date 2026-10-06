// selecting element in javascript

// const element = document.getElementById("dialogBody");

const element2 = document.querySelector("p");

// const entirep = document.querySelectorAll('p')
// console.log(entirep)
// console.log(entirep.length)

// console.log(element2.innerHTML)\

// const topbar = document.querySelector(".topbar")

// console.log(topbar.innerHTML)

// changing content

// element2.innerText = "Alihu Dolapo Dashboard game"
// element2.innerHTML = `
//     <button>Clear Dasjboard</button>
//     `;

// element2.style.fontSize = "50px"
// element2.style.fontWeight = "bold"
// element2.style.color = "green"
// element2.style.backgroundColor = "blue"

// element2.classList.add("content")
// element2.classList.remove("eyebrow")

// const header = document.querySelector(".topbar")

// console.log(header.getAttribute("class"))

// // workout
// // use getAttribute to get the arai-lable attribute value

// header.setAttribute("aria-label", "post-header")

// creating element
const divElement = document.createElement("div");
divElement.className = "content";
// divElement.innerHTML = `<p>This is a simple content</p>`
const paragraph = document.createElement("p");
paragraph.className = "text-coontent";
paragraph.innerText = "This is a paragraph text added using Javascript";

divElement.appendChild(paragraph);

console.log(divElement);

document.body.prepend(divElement);

const positionElement = document.querySelector(".content-section");

positionElement.insertAdjacentHTML(
  "beforebegin",
  "<p>Text should be add to insertAdjacent</p>",
);
