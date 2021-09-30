function main() {
  function onClick(event) {
    console.log(event);
  }
  const changeMe = document.querySelector("button");
  changeMe.addEventListener("click", onClick);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
