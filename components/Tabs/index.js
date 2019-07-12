// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//grab dom node to add tabs to
const tabs = document.querySelector(".tabs");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(data => {
    // console.log("data check", data.data.topics);
    const topics = data.data.topics;
    topics.forEach(topic => {
      const tab = createTab(topic);
      tabs.appendChild(tab);
    });
  })
  .catch(error => {
    console.log("ERROR:", error);
  });
