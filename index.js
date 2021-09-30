function main() {
  const name = "Nagehan";
  const changeMe = document.querySelector("button");
  function onClick(event) {
    changeMe.textContent = name;
  }
  changeMe.addEventListener("click", onClick);
  const title = document.querySelector(".title");
  title.textContent = "Goodbye";
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
