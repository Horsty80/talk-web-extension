try {
  console.log("content script loaded");

  // add a new element to the DOM
  const p = document.createElement("p");
  p.textContent = "This paragraph was added by a page script.";
  p.setAttribute("id", "page-script-para");
  document.body.prepend(p);
  const newElement = document.querySelector("#page-script-para");
  console.log("the p tag", newElement);
} catch (e) {
  console.error(e);
}
