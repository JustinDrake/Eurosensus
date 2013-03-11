$(function () {
    var $container = $('#featured-container');

    var templateFeatured = $('#template-featured').text();
    var templateCarousel = $('#template-carousel').text();

    $container.html(Mustache.to_html(templateFeatured, data));
    $('#carousel').html(Mustache.to_html(templateCarousel, data));
});
