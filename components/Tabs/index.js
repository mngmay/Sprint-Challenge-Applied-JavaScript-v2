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
const topics = document.querySelector(".topics");
// console.log(topics);

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(data => {
    // console.log("data check", data.data.topics);
    const topic = data.data.topics;
    topic.forEach(topic => {
      const tab = CreateTab(topic);
      topics.appendChild(tab);
    });
  })
  .catch(error => {
    console.log("ERROR:", error);
  });

function CreateTab(tab) {
  //create element
  newTab = document.createElement("div");

  //add class & dataset
  newTab.classList.add("tab");
  newTab.dataset.tab = tab;
  console.log(newTab);

  //add content
  newTab.textContent = tab;

  return newTab;
}
