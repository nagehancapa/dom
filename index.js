function main() {
  const subject = document.querySelector("h3");
  subject.addEventListener("click", () => console.log("clicked"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
