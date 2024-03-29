const username = 'tmchuynh'
const perPage = 10000; //If you have more articles, increase this or add pagination
var count = 0;
var left = 0;


/**
 * It fetches the articles from the API, then adds them to the page
 */
const getArticles = async () => {
    const response = await fetch(`https://dev.to/api/articles?username=${username}&state=all`);
    const data = await response.json();
    const name = data[0].user.name;
    document.querySelectorAll('#featured-article .title').forEach(el => el.textContent = name);
    document.title = `TMCHUYNH`;

    // console.log(data);

    for (let article of data) {
        count = addArticle(article);
    }
}

/**
 * Creates article cards from DEV.to API informtion
 * Will only display the articles dependent on certain criteria
 * 
 * positive_reaction_count >= 15
 * comments_count > 10
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

        // Only display blog posts with certain criteria 
        if (article.positive_reactions_count >= 10 || article.comments_count > 10) {
            document.querySelector('#featured-articles').appendChild(clone);
        }

        count += 1;
    }

    return count;
}

getArticles();