function main() {
  const name = "nagehan";
  console.log(name);
  console.log(document);
}

// check if elements are still loading
if (document.readyState === "loading") {
  // wait for the DOMContentLoaded event
  console.log("waiting");
  document.addEventListener("DOMContentLoaded", main);
} else {
  console.log("loaded");
  main();
}
