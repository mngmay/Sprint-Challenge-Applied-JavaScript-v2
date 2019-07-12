// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//grab DOM element to append to
const cardsContainer = document.querySelector(".cards-container");
// console.log(cardsContainer);

axios.get(`https://lambda-times-backend.herokuapp.com/articles`).then(data => {
  const articleTopics = data.data.articles;
  console.log("data check", articleTopics);

  console.log("topics nodelist", articleTopics.javascript);
  console.log("topic content", articleTopics.javascript[0]);
});

function createCard(cardInfo) {
  //create elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");
}
