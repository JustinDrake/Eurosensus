$(function () {
    $('#initiatives-container').html(Mustache.to_html($('#template-initiative').text(), data));
});
