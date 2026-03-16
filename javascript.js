//JS file

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function(e){
  e.preventDefault();
  console.log(e.target);

  const item = input.value;


  const list = document.createElement("li");
  list.classList.add("list");
  ul.appendChild(list);

  const span = document.createElement("span");
  span.classList.add("span");
  span.textContent = item;

  list.appendChild(span);

  const secondButton = document.createElement("button");
  secondButton.classList.add("secondButton");
  secondButton.textContent = "delete";
secondButton.addEventListener("click", function(){
  list.remove();
})
  list.appendChild(secondButton);

  input.value = "";
  input.focus();
});



