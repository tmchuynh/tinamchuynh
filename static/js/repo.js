var project_container = document.getElementById('project-list');
var obj = new Array();

$.getJSON('https://api.github.com/users/tmchuynh/repos', (data) => {
    console.log(data);

    data.forEach((element) => {
        populate(element.name, element.html_url, element.pushed_at);
    })
})


function populate(name, url, updated) {

    var card = document.createElement("div");
    card.classList.add("cards");

    var title = document.createElement("a");
    title.classList.add("title");
    title.innerHTML = name;
    var hyperlink = document.createAttribute("href");
    hyperlink.value = url;
    title.setAttributeNode(hyperlink);
    card.appendChild(title);

    console.log(updated);
    date = updated.split("T")[0]
    console.log(date);
    date_0 = date.split("-");

    year = date_0[0];
    month = date_0[1];
    day = date_0[2];

    console.log(month, " ", day, " ", year)

    var subtitle = document.createElement("code");
    subtitle.classList.add("last-updated");
    subtitle.classList.add("mb-0");
    subtitle.innerHTML = "Last updated on:"
    card.appendChild(subtitle);

    var last_updated = document.createElement("code");
    last_updated.innerHTML = month + "/" + day + "/" + year;
    last_updated.classList.add("last-updated");
    last_updated.classList.add("mt-0");
    card.appendChild(last_updated);
    
    project_container.appendChild(card);
}