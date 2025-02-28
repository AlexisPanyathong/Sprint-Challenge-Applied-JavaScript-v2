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
    const titles = Object.keys(response.data.articles);
    // console.log(titles);
    titles.forEach(title => {
        response.data.articles[title].forEach(article => {
            const card = newCard(article);
            cardsContainer.appendChild(card);
        })
    })

   
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
    const img = document.createElement('img');
    const by = document.createElement('span');

    //Set the style
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    //Set the content
    img.src = data.authorPhoto;
    headline.textContent = `${data.headline}`;
    by.textContent = `By ${data.authorName}`;

    //Put together
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);
    
    
    return card;
}