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

// const articleTitle = 'random';

// const cardList =[
//     'bootstrap',
//     'javascript',
//     'jquery',
//     'node',
//     'technology'
// ];



// cardList.forEach((res) =>{
//     axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
//     .then(res =>{
//         // console.log(res.data);
//         cardsContainer.appendChild(articleRandom(res.data))
//     });
// });

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res=>{
    console.log('cards', res.data);
    
    //getting an object from res.data
    const articles = res.data.articles;
    // console.log(articles.constructor.name);
    // console.log(articles)
    //object.enteries turns (articles) into an array to loop over 
    
    Object.entries(articles).forEach(article=>{
    // article is an array inside the forEach loop
    // console.log(article.constructor.name)
    //looping through article
        article.forEach(arrayOne =>{
            //confirming if arrayOne is an array 
            if (arrayOne.constructor.name == 'Array'){
                // console.log('true')
                // console.log(arrayOne.constructor.name)
                //loop through the array and loops objects
                arrayOne.forEach(object=>{
                    // object has keys and values
                    // keys: authorName, authorPhoto, healine
                    // console.log(object.authorPhoto)
                    // object.authorPhoto

                    //appending card to container using objects.(keys)
                    return cardsContainer.appendChild(articleRandom(object.authorName, object.authorPhoto, object.headline))
                })
            }else{
                // just for your own sanity. check if array or not
                // console.log('false')
                // console.log(arrayOne.constructor.name)
            }
        })
        
        
    })
})
  .catch((error)=>{
      console.log('api is down', error)
  })



function articleRandom(authorName, authorPhoto, headline){
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
    avatar.src = authorPhoto;
    headLine.textContent = headline;
    name.textContent = authorName;

    //parent/child append
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgcont);
    imgcont.appendChild(avatar);
    author.appendChild(name);

    // console.log('hello', card)
    return card;
}