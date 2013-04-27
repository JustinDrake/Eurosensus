// /^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/

$(function () {
    $('form').html(Mustache.to_html($('#template-voting-form').text(), data));

    $('#vote').on('click', function () {
        $('form').find('.control-group').each(function () {
            var $this = $(this);

            if(!$this.hasClass('has-success')) {
                $this.addClass('has-error');
            }
        });
    });


    $('.dropdown-menu').on('click', 'li', function () {
        var $this = $(this);

        // Update the dropdown text
        $this
            .closest('.btn-group')
            .find('.dropdown-toggle')
            .text($this.text());

        // Mark a success
        $this
            .closest('.control-group')
            .addClass('has-success');
    });

    // Disable the document dropdown
    $('#dropdown-document').attr('disabled', true);
    $('#input-document-number').attr('disabled', true);

    // Enable the document dropdown WARNING: Should come after the after .dropdown-menu handler
    $('#dropdown-nationality + .dropdown-menu').on('click', 'li', function () {
        var $this = $(this);

        var nationality = $('#dropdown-nationality').text();
        var documents;

        countryData.forEach(function (country) {
            if(country.nationality === nationality) {
                documents = country.documents;
            }
        });

        // Update the dropdown values
        $('#dropdown-document + .dropdown-menu')
            .html(Mustache.to_html($('#template-dropdown-menu').text(), {
                dropdownValues: documents.map(function (value) { return { value: value }})
            }));

        if(documents.length === 0) {
            // Should we clear any existing values?

            $('#input-document-number')
                .attr('disabled', true)
                .closest('.control-group')
                .addClass('has-success');

            $('#dropdown-document')
                .attr('disabled', true)
                .closest('.control-group')
                .addClass('has-success');
        } else {
            $('#input-document-number')
                .attr('disabled', false)
                .closest('.control-group')
                .removeClass('has-success');

            $('#dropdown-document')
                .attr('disabled', false)
                .closest('.control-group')
                .removeClass('has-success');
        }
    });

    $('form').on('blur', 'input', function () {
        var $this = $(this);

        if($this.attr('id') === 'input-date-of-birth') {
            if($this.val() === '') {
                return;
            }

            if(/^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/.test($this.val())) {
                return $this
                    .closest('.control-group')
                    .addClass('has-success');
            } else {
                return $this
                    .closest('.control-group')
                    .addClass('has-error');
            }
        }

        if($this.val() !== '') {
            return $this
                .closest('.control-group')
                .addClass('has-success');
        }
    });
});