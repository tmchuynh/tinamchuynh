var project_container = document.getElementById('project-list');
var obj = new Array();

$.getJSON('https://api.github.com/users/tmchuynh/repos', (data) => {
    console.log(data);

    
    for (var obj = 0; obj < data.length; obj++) {
        if (data[obj].visibility === "public") {
            
            // console.log(data[i].html_url); // urls of repos
            var url = data[obj].html_url;

            // console.log(data[i].name); // name of project
            var proj_name = data[obj].full_name;

            // console.log(data[i].pushed_at); // last updated
            var updated = data[obj].pushed_at;

            var language;

            $.getJSON(data[obj].languages_url, (lang) => {
                // console.log(lang); // array of languages used
                language = lang;
                obj = [proj_name, language, url, updated];


                var card = document.createElement("div");

                // card.classList.add("d-flex");    
                card.classList.add("cards");
                
                var title = document.createElement("a");
                title.innerHTML = proj_name;
                console.log(title);

                var hyperlink = document.createAttribute("href");
                hyperlink.value = url;
                title.setAttributeNode(hyperlink);

                card.appendChild(title);

                for (let i = 0; i < language[1]; i++) {
                    var langs = document.createElement("h4");
                    langs.innerHTML = project[1][0][i];

                    card.appendChild(langs);
                }

                var last_updated = document.createElement("code");
                last_updated.innerHTML = updated;

                card.appendChild(last_updated);
                project_container.appendChild(card);
            })

        }
        
    }
    
})



function populate(project) {
    console.log(project);

    
}