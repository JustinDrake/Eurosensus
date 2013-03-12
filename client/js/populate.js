$(function () {
    var $container = $('#featured-container');

    var templateFeatured = $('#template-featured').text();
    var templateCarousel = $('#template-carousel').text();

    function shuffle(array) {
        var tmp, current, top = array.length;

        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }

        return array;
    }

    // Shuffle the initiatives
    data.ECIs = shuffle(data.ECIs);

    $container.html(Mustache.to_html(templateFeatured, data));
    $('#carousel').html(Mustache.to_html(templateCarousel, data));
});
