var project_container = document.getElementById('project-list');
var obj = new Array();

$.getJSON('https://api.github.com/users/tmchuynh/repos', (data) => {
    console.log(data);



    // data.sort((a, b) => (b.pushed_at > a.pushed_at) ? 1 : ((a.pushed_at > b.pushed_at) ? -1 : 0))

    data.forEach((element, index) => {
        update = element.pushed_at.split("T")[0].split("-").join().replaceAll(",","");


        data.sort((a, b) => b.pushed_at.split("T")[0].split("-").join().replaceAll(",", "").localeCompare(a.pushed_at));
        

        $.getJSON(element.languages_url, (data) => {
            // console.log(data, index)
            console.log(Object.keys(data))
            populate(element.name, element.html_url, element.pushed_at, Object.keys(data));
        })

    })
})


function populate(name, url, updated, languages) {

    console.log(languages)

    var card = document.createElement("div");
    card.classList.add("cards");

    var lang_icons = document.createElement("div");
    lang_icons.classList.add("d-flex");

    var icon = document.createElement("i");
    icon.classList.add("bx")
    console.log("read");
    if (languages.length == 0) {
        icon.innerHTML = " ";
        // break;
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
    lang_icons.appendChild(icon);


    card.appendChild(lang_icons);


    var title = document.createElement("a");
    title.classList.add("title");
    name_parts = name.replaceAll("-", " ");
    title.innerHTML = name_parts
    var hyperlink = document.createAttribute("href");
    hyperlink.value = url;
    title.setAttributeNode(hyperlink);
    card.appendChild(title);

    // console.log(updated);
    date = updated.split("T")[0]
    // console.log(date);
    date_0 = date.split("-");

    year = date_0[0];
    month = date_0[1];
    day = date_0[2];

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