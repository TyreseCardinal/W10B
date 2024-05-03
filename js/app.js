
// Changing An Element Style (Color/Background Color)
// document.getElementById(`tag_id`);

// A) // 

const maingreet = document.getElementById("main-greet")

changeColor(maingreet)

function changeColor(element) {
  element.style.backgroundColor = "#800080"
}

// Adding new content to a tag using innerText
// document.getElementsByClassName(`tag_class`); 

// B) // 

function addInner() {
  const cards = Array.from(document.getElementsByClassName("card"));
  const innerText = " B) Lorem Ipsum";

  cards.forEach(card => {
    const div = document.createElement("div");
    div.innerText = innerText;
    card.append(div);
  });
}

addInner(null);

// Adding a new nested tag using insertAdjacentHMTL
// document.querySelector(`div p`);

// C) // 

const parentElement = document.querySelector('#card-2');

const newHTML = '<div><p>C) This is the new nested tag</p></div>';

parentElement.insertAdjacentHTML('beforeend', newHTML);

// Adding a new tag before an existing tag using insertAdjecentHTML
// document.querySelectorAll(`p`);

// D) // 

const parentElements = document.querySelectorAll('header');

let newHtmlTwo = '<div><h2> D) This is a new tag before an existing tag</h2></div>';

parentElements.forEach(parentElement => {
  parentElement.insertAdjacentHTML('beforeend', newHtmlTwo);
});
