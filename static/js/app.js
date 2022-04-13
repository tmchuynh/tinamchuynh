const username = 'tmchuynh'
const perPage = 15; //If you have more articles, increase this or add pagination
var count = 0;
var left = 0;


const getArticles = async () => {
    const response = await fetch(`https://dev.to/api/articles?username=${username}`);
    const data = await response.json();
    const name = data[0].user.name;
    document.querySelectorAll('.blog-list .name').forEach(el => el.textContent = name);
    document.title = `TMCHUYNH`;

    console.log(data);

    for (article of data) {
        count = addArticle(article);
    }
}

const addArticle = article => {
    const template = document.querySelector('#blog-item');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = article.title;
    clone.querySelector('.url').href = `article.html?id=${article.id}`;

    // Only display blog posts that have a cover image
    if (article.cover_image) {
        clone.querySelector('.cover').src = article.cover_image;
        document.querySelector('#blog-list').appendChild(clone);
        count += 1;
    }

    return count;
}

getArticles();