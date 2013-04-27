$(function () {
    var $floatingBar = $('.floating-bar');
    var $document = $(document);
    var initialPosition = $floatingBar.position().top - 20;

    $(window).on('scroll', function () {
        $floatingBar.css('margin-top', Math.max(0, $document.scrollTop() - initialPosition));
    });
});