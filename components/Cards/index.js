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

const cardsContainer = document.querySelector('.cards-container')
// console.log(cardsContainer)

const articleTitle = 'random';

const cardList =[
    'bootstrap',
    'javascript',
    'jquery',
    'node',
    'technology'
];


cardList.forEach((res) =>{
    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(res =>{
        console.log(res.data);
        cardsContainer.appendChild(article(res.articles, res.authorName, res.authorPhoto, res.headline))
    });
});

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(res=>{
    // console.log('cards', res.data);
    const card = article(res.data)
    cardsContainer.appendChild(card)
  })
  .catch((error)=>{
      console.log('api is down', error)
  });






function article(title, authorName, authorPhoto, headline){
    //creating element
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgcont = document.createElement('div');
    const avatar = document.createElement('img');
    const name  = document.createElement('span');

    //giving class
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgcont.classList.add('img-container');

    //setting source
    avatar.src = 'assets/max.jpg';
    headLine.textContent = 'hello';
    name.textContent = 'paul';

    //parent/child append
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgcont);
    imgcont.appendChild(avatar);
    author.appendChild(name);

    // console.log('hello', card)
    return card;
}