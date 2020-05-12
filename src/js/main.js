const add = document.getElementById("add");
const  textElement = document.getElementById("text");
add.addEventListener("click",  () => {
  console.log(textElement.value);
});