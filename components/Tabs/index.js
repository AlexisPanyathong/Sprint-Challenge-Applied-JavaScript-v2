// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.topics');
    console.log(tabs);
    axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {
    //handle success
    console.log(response.data.topics);
    response.data.topics.forEach(topic => {
        const tab = newTab(topic);
        tabs.appendChild(tab);
    })

})
.catch(error => {
    //handle error
    console.log(error);
});


function newTab(data) {
    const javaScript = document.createElement('div');
    javaScript.classList.add('tab');

    //Set the content
    javaScript.textContent = data
    

    return javaScript;
}



