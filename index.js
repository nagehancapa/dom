function main() {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => console.log(paragraph));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
