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
const cardsContainer = document.querySelector('.cards-container');
console.log(cardsContainer);
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    //handle success
    console.log(response);
    const card = newCard(response.data);
    cardsContainer.appendChild(card);
})
.catch(error => {
    //handle error
    console.log(error);
})

function newCard(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const by = document.createElement('span');

    //Set the style
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    //Set the content
    imgContainer.src = data.url;
    headline.textContent = `${data.headline}`;
    author.textContent = `${data.author}`;
    by.textContent = `${data.by}`;

    //Put together
    card.appendChild(headline);
    card.appendChild(imgContainer);
    
    return card;
}