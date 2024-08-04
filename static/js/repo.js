var project_container = document.getElementById('project-list');
var obj = new Array();

/* The below code is using the GitHub API to get a list of all the repositories that I have created. It
then loops through each repository and checks if it is a fork or not. If it is not a fork, it then
gets the languages used in that repository and populates the HTML with the information. */
$.getJSON('https://api.github.com/users/tmchuynh/repos', (data) => {
    // console.log(data);

    data.forEach((element) => {

        if (element.fork == false) {
            $.getJSON(element.languages_url, (data) => {
                console.log(Object.keys(data))

                populate(element.name, element.html_url, element.pushed_at, Object.keys(data), element);
            })
        }
    })
})


/**
 * It creates a card for each project and populates it with the project's name, url, last updated date,
 * and languages used
 * @param name - The name of the project
 * @param url - The url of the project
 * @param updated - The date the project was last updated
 * @param languages - an array of languages used in the project
 * @param element - The element that the card will be appended to.
 */
function populate(name, url, updated, languages, element) {

    var card = document.createElement("div");
    card.classList.add("cards");

    var lang_icons = document.createElement("div");
    lang_icons.classList.add("d-flex");

    var icon = document.createElement("i");
    icon.classList.add("bx")
    console.log("read");
    if (languages.length == 0) {
        icon.innerHTML = " ";
    }
    if (languages.includes("HTML")) {
        var icon2 = document.createElement("i");
        icon2.classList.add("bx")
        icon2.classList.add("bxl-html5")
        icon2.classList.add("html");
        lang_icons.appendChild(icon2);
    }
    if (languages.includes("Python")) {
        var icon3 = document.createElement("i");
        icon3.classList.add("bx")
        icon3.classList.add("bxl-python")
        icon3.classList.add("python");
        lang_icons.appendChild(icon3);
    }
    if (languages.includes("JavaScript")) {
        var icon4 = document.createElement("i");
        icon4.classList.add("bx")
        icon4.classList.add("bxl-javascript")
        icon4.classList.add("javascript");
        lang_icons.appendChild(icon4);
    }
    if (languages.includes("CSS")) {
        var icon5 = document.createElement("i");
        icon5.classList.add("bx")
        icon5.classList.add("bxl-css3")
        icon5.classList.add("css");
        lang_icons.appendChild(icon5);
    }
    if (languages.includes("TypeScript")) {
        var icon6 = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = "./static/icons/typescript.svg";
        icon6.setAttributeNode(source);
        icon6.classList.add("typescript");
        lang_icons.appendChild(icon6);
    }
    if (languages.includes("C#")) {
        var icon7 = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = "./static/icons/csharp.svg";
        icon7.setAttributeNode(source);
        icon7.classList.add("csharp");
        lang_icons.appendChild(icon7);
    }
    if (languages.includes("Java")) {
        var icon9 = document.createElement("i");
        icon9.classList.add("bx");
        icon9.classList.add("bxl-java");
        icon9.classList.add("plain-java");
        lang_icons.appendChild(icon9);
    }
    if (languages.includes("SCSS")) {
        var icon10 = document.createElement("i");
        icon10.classList.add("bx");
        icon10.classList.add("bx1-sass");
        icon10.classList.add("scss");
        lang_icons.appendChild(icon10);
    }
    lang_icons.appendChild(icon);


    card.appendChild(lang_icons);


    var title = document.createElement("a");
    title.classList.add("title");
    var name_parts = name.replaceAll("-", " ");
    title.innerHTML = name_parts;
    var hyperlink = document.createAttribute("href");
    hyperlink.value = url;
    title.setAttributeNode(hyperlink);
    card.appendChild(title);

    // console.log(updated);
    var date = updated.split("T")[0]
    // console.log(date);
    var date_0 = date.split("-");

    var year = date_0[0];
    var month = date_0[1];
    var day = date_0[2];

    // console.log(month, " ", day, " ", year)

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