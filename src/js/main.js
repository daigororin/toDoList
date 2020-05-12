const add = document.getElementById("add");
const  textElement = document.getElementById("text");

add.addEventListener("click",  () => {
  const li = document.createElement("li");
  li.textContent = textElement.value;
  document.getElementById("ul").appendChild(li);
  // console.log(li);
});