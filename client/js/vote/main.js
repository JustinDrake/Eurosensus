// /^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/

$(function () {
    $('form').html(Mustache.to_html($('#template-voting-form').text(), data));
    console.log(Mustache.to_html($('#template-voting-form').text(), data));
});

$(function () {
    $('#vote').on('click', function () {
        $('form').find('input').each(function () {
            var $this = $(this);

            if($this.val() === '') {
                $this
                    .closest('.control-group')
                    .addClass('has-error');
            }
        });
    });
});