function switchTheme() {
  // TODO: implement toggling the light/dark theme
  let bodyElement = document.body;
  let tableElement = document.getElementById("table-dark");

  bodyElement.classList.toggle("dark");

  if (bodyElement.classList.contains("dark")) {
    tableElement.classList.add("table-dark");
  } else tableElement.classList.remove("table-dark");
}
