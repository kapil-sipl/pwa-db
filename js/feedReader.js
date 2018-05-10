//define your rss feed url here
const rssUrl = 'https://www.bhaskar.com/rss-feed/1701/';
const addFeedsToSite = function (containerName) {
    const container = $('#' + containerName);


    $('#loadingIndicator').text('Loading...');

    $.get(rssUrl, function (data) {
        container.empty();
        $(data).find("item").each(function (idx) {
            const el = $(this);
            const item_title = el.find("title").text();
            const item_description = el.find("description").text();
            const item_pubDate = el.find("pubDate").text();
            AddItem(container, item_title, item_description, item_pubDate);
        });

        $('#loadingIndicator').text('Dainik Bhasker last update: ' + data.lastModified);

    }).fail(function () {
        $('#loadingIndicator').text('Error refreshing news');

    });


};

function AddItem(container, item_title, item_description, item_pubDate) {
    container.append(`<div class="col-md-4 col-sm-4 dbDetails">
            <article class="article">
                <h4 class="article-title">${item_title}</h4>
                <div class="article-body">
                <div class="description">${item_description}</div>
                <div class="pubDate">${item_pubDate}</div>
                </div>
                </article>
            </div>`);
}
