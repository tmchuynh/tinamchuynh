var project_container = document.getElementById('project-list');
var obj = new Array();

/**
 * Get repository info from GitHub API 
 */
$.getJSON('https://api.github.com/users/tmchuynh/repos', (data) => {
    // console.log(data);

    data.forEach((element) => {

        if (element.fork == false) {
            $.getJSON(element.languages_url, (data) => {
                if (element.has_pages) {
                    var pages = "https://tmchuynh.github.io/" + element.name + "/";
                }
                populate(element.name, element.html_url, element.pushed_at, Object.keys(data), element, pages);
            })
        }
    })
})


/**
 * Populate repository project cards with language icons respectively
 * 
 * @param {any} name = Project name
 * @param {any} url = GitHub URL link
 * @param {any} updated = Last commit / push date MM/DD/YYYY
 * @param {any} languages = Programming languages used
 */
function populate(name, url, updated, languages, element, pages) {
    var card = document.createElement("div");
    card.classList.add("cards");

    var lang_icons = document.createElement("div");
    lang_icons.classList.add("d-flex");

    var icon = document.createElement("i");
    icon.classList.add("bx")
    // console.log("read");
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
        var icon10 = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = "./static/icons/sass.svg";
        icon10.setAttributeNode(source);
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

    if (pages != undefined) {
        var pg = document.createElement("a");
        pg.classList.add("pages");
        var link = document.createAttribute("href");
        link.value = pages;
        pg.innerHTML = pages;
        pg.setAttributeNode(link);
        card.appendChild(pg);
    }

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

    today(month);

    function today(month) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        // console.log(today);

        if (month > (mm - 3) || month == mm) {
            project_container.appendChild(card);
            // console.log(month, " ", mm)
        }
    }



}

