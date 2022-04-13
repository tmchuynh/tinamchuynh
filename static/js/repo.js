$.getJSON('https://api.github.com/users/tmchuynh/repos', (data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        if (data[i].visibility === "public") {
            console.log(data[i].html_url); // urls of repos
            console.log(data[i].name); // name of project
            console.log(data[i].pushed_at); // last updated

            $.getJSON(data[i].languages_url, (lang) => {
                console.log(lang); // array of languages used
            })
        }
        
    }
})

