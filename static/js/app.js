const username = 'tmchuynh'
var count = 0;

/**
 * Get article information info from DEV.to API 
*/
const getArticles = async () => {
    const response = await fetch(`https://dev.to/api/articles?username=${username}&state=all`);
    const data = await response.json();
    const name = data[0].user.name;
    document.querySelectorAll('#blog-list .title').forEach(el => el.textContent = name);
    document.title = `TMCHUYNH`;

    // console.log(data);

    for (let article of data) {
        count = addArticle(article);
    }
}

/**
 * Creates article cards from DEV.to API informtion
 * Displays ALL articles     
 * 
 * @param {any} article = the information of each article written from DEV.to API
 * @returns the number of articles
 */
const addArticle = article => {
    const template = document.querySelector('#blog-item');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = article.title;

    const date = article.published_timestamp;
    let parts = date.split("T")[0].split("-");
    let year = parts[0];
    let month = parts[1];
    let day = parts[2];
    // console.log(article);
    clone.querySelector('.updated').textContent = "Published on " + month + "/" + day + "/" + year;

    const reading_time = article.reading_time_minutes + " minute read";
    clone.querySelector('.reading-time').textContent = reading_time;


    clone.querySelector('.url').href = article.canonical_url;

    // Only display blog posts that have a cover image
    if (article.cover_image) {
        clone.querySelector('.cover').src = article.cover_image;
        document.querySelector('#blog-list').appendChild(clone);

        count += 1;
    }
    // use placeholder.jpg for articles without a cover image
    else {
        clone.querySelector('.cover').src  = "static/assets/placeholder.jpg";
        document.querySelector("#blog-list").appendChild(clone);

        count += 1;

    }

    return count;
}

getArticles();