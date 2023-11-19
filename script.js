const accordion = document.getElementById("accordion");

function appendQuestionAndAnswer(jsonObject) {
  appendQuestion(jsonObject);
  appendAnswer(jsonObject);
}

function appendQuestion(jsonObject) {
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  titleDiv.textContent = jsonObject.title;
  accordion.appendChild(titleDiv);
  titleDiv.addEventListener("click", toggle);
}

function appendAnswer(jsonObject) {
  const descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("class", "description");
  descriptionDiv.textContent = jsonObject.body;
  accordion.appendChild(descriptionDiv);
}

// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((jsonArray) => jsonArray.forEach(appendQuestionAndAnswer));

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// const section1Element = document.getElementById("section1");
// section1Element.addEventListener("click", toggle);
