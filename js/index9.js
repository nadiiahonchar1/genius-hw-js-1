document
  .querySelector("#button-control")
  .addEventListener(
    "click",
    () => (document.querySelector("#text").style.display = "none")
  );
document.querySelector("#is-hidden").addEventListener("click", () => {
  document.querySelector("#is-hidden").style.display = "none";
});

function toggleNode(node) {
  var childUl = node.querySelector("ul");
  if (childUl) {
    childUl.style.display =
      childUl.style.display === "none" || childUl.style.display === ""
        ? "block"
        : "none";
  }
}
