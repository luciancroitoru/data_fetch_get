async function getData() {
  displayQuote.textContent = "Getting the data...";

  const selectedOption = dropdownMenu.querySelector("option:checked");
  const categoryName = selectedOption.textContent;

  //API request
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${categoryName}`
  );

  const quote = await response.json();

  // quote display
  displayQuote.textContent = quote.value;
}

// data fetching
async function categories() {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await response.json();

  // options from dropdown creation
  categories.forEach((categoryName) => {
    const option = document.createElement("option");
    option.textContent = categoryName;
    dropdownMenu.append(option);
  });

  // enable the button
  button.disabled = false;
}

categories();

const button = document.querySelector(`#button`);
button.addEventListener(`click`, getData);
const displayQuote = document.querySelector(`.display-text`);
const dropdownMenu = document.querySelector(`#dropdown-menu`);