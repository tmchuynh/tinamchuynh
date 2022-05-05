var filterOptions = document.getElementById("myDropdown");

var filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", function () {
    console.log("clicked");
    console.log(filterOptions);
    if ($(document).width() > 940 ) {
        filterOptions.classList.toggle("d-flex");
    } else {
        filterOptions.classList.toggle("d-block");
    }
});


document.addEventListener("click", (evt) => {
    let userClick = evt.target;

    do {
        if (userClick == filterOptions || userClick == filterBtn) {
            return;
        }
        userClick = userClick.parentNode;

    } while (userClick);
    if (filterOptions.classList.contains("d-flex")) {
        filterOptions.classList.toggle("d-flex");
    } else {
        filterOptions.classList.toggle("d-block");
    }
});


var timeFilter = document.getElementById("times");
var titleFilter = document.getElementById("title");
var publishFilter = document.getElementById("published");

/**
 * Filters by reading time
 */
timeFilter.addEventListener("click", function () {
    let i, article, reading_time, approve, switching = true;

    while (switching) {
        article = document.querySelectorAll("#blog-list > li");

        reading_time = document.querySelectorAll(".reading-time");

        console.log(reading_time);

        // by default, the loop only executes once
        switching = false;
        approve = false;

        // all cards get looked through
        for (i = 0; i < (article.length - 1); i++) {
            console.log(i, reading_time);
            console.log(article);

            // Checks if the reading time holds a less value
            if (reading_time[i].innerHTML > reading_time[i + 1].innerHTML) {
                
                // if so, it has a quicker reading time and the switch gets approved
                article[i].parentElement.insertBefore(article[i + 1], article[i]);
                approve = true;
            }
        }

        if (approve) {
            // The cards get switched and all the article get checked again
            switching = true;
        } else {
            // if the article did not move, all changes have finished
            switching = false;
        }
    }

    toggleFilterMenu();
});


/**
 * Filters by title
 */
titleFilter.addEventListener("click", function () {
    let i, article, article_title, approve, switching = true;

    while (switching) {
        article = document.querySelectorAll("#blog-list > li");

        article_title = document.querySelectorAll(".info > h3");
        console.log(article_title);

        // by default, the loop only executes once
        switching = false;
        approve = false;
        
        // all cards get looked through
        for (i = 0; i < (article.length - 1); i++) {
            console.log(i, article_title);
            console.log(article);
            
            // Checks if the first character of the title holds a greater value
            if (article_title[i].innerHTML.toLowerCase() > article_title[i + 1].innerHTML.toLowerCase()) {
                
                // if so, it is earlier on in the alphabet and the switch gets approved
                article[i].parentElement.insertBefore(article[i + 1], article[i]);
                approve = true;
            }
        }

        if (approve) {
            // The cards get switched and all the article get checked again
            switching = true;
        } else {
            // if the article did not move, all changes have finished
            switching = false;
        }
    }

    toggleFilterMenu();
});


/**
 * Filters by the published date (original)
 */
publishFilter.addEventListener("click", function () {
    let i, article, published, approve, switching = true;

    while (switching) {

        article = document.querySelectorAll("#blog-list > li");

        published = document.querySelectorAll(".info > code");
        console.log(published);

        // by default, the loop only executes once
        switching = false;
        approve = false;

        // all cards get looked through
        for (i = 0; i < (article.length - 1); i++) {
            console.log(i, published);
            console.log(article);

            // Checks if the number is greater
            if (published[i].innerHTML.split(" on ")[1].replaceAll("/", "") < published[i + 1].innerHTML.split(" on ")[1].replaceAll("/", "")) {
                
                // if so, it is more current on the calendar and the switch gets approved
                article[i].parentElement.insertBefore(article[i + 1], article[i]);
                approve = true;
            }
        }

        if (approve) {
            // The cards get switched and all the article get checked again
            switching = true;
        } else {
            // if the article did not move, all changes have finished
            switching = false;
        }
    }

    toggleFilterMenu();
});


function toggleFilterMenu() {
    filterOptions.classList.toggle("d-flex");
}