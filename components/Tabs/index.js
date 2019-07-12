// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const topics = document.querySelector('.topics')

// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
// .then(res=>{
// //   console.log(res.data);
//   // const textBlock = createNewTab(res.data.topics)
//   Response.data.arrayTopics.forEach(topic=>{
//     // console.log('tabs', arrayTopics.Title)
//     // const tabs = createNewTab(topic);
//     topics.appendChild(createNewTab(topic));
//     // tabs.textContent=topic.Title;
//     // console.log(tabs);
//     return tabs;
// })
// .catch()
// });

// const arrayTopics = [
//     {Title: 'JavaScript'},
//     {Title: 'Bootstrap'},
//     {Title: 'Technology'},
//     {Title: 'Jquery'},
//     {Title: 'Node.js'}
// ];

// arrayTopics.forEach(topic=>{
//     // console.log('tabs', arrayTopics.Title)
//     const tabs = createNewTab(topic);
//     topics.appendChild(tabs);
//     tabs.textContent=topic.Title;
//     // console.log(tabs);
//     return tabs;
// })

// function createNewTab(topic){
//     const newTab = document.createElement('div');
//     newTab.classList.add('tab');
//     newTab.textContent = topic.Title
//     // topics.appendChild(newTab)
//     // console.log(newTab)
//     return newTab;
//   };



const topics = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(res=>{
//   console.log(res.data);
  const textBlock = createNewTab(res.data)
  topics.appendChild(textBlock);
});

const arrayTopics = [
    {Title: 'JavaScript'},
    {Title: 'Bootstrap'},
    {Title: 'Technology'},
    {Title: 'Jquery'},
    {Title: 'Node.js'}
];

arrayTopics.forEach(topic=>{
    // console.log('tabs', arrayTopics.Title)
    const tabs = createNewTab(topic);
    topics.appendChild(tabs);
    tabs.textContent=topic.Title;
    // console.log(tabs);
    return tabs;
})

function createNewTab(topic){
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = topic.Title
    topics.appendChild(newTab)
    // console.log(newTab)
    return newTab;
  };