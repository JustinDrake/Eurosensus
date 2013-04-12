$(function () {
    var $container = $('#featured-container');

    var templateFeatured = $('#template-featured').text();

    function shuffle(array) {
        var tmp;
        var random;
        var current = array.length;

        // Deal with the empty array case
        if(current) {
            while(current - 1) {
                current -= 1;

                // Select a random index [0:current]
                random = Math.floor(Math.random() * (current + 1));

                // Swap the randomly value with the top value
                tmp = array[random];
                array[random] = array[current];
                array[current] = tmp;
            }
        }

        return array;
    }

    // Shuffle the initiatives
    data.ECIs = shuffle(data.ECIs);

    $('#featured-container').html(Mustache.to_html($('#template-featured').text(), data));
    $('#carousel').html(Mustache.to_html($('#template-carousel').text(), data));
    $('#representatives-container').html(Mustache.to_html($('#template-representatives').text(), data));
});
