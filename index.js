function main() {
  const changeMe = document.querySelector("button");
  console.log(changeMe);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
