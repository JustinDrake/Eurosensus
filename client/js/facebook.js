$(function () {
    var $name = $('#facebook-name');
    var $login = $('#facebook-login');
    var $logout = $('#facebook-logout');

    // Grab the username
    $.post('/username', function (data) {
        if(data) {
            // Update the name
            $name
                .text('Welcome, ' + data)
                .show();

            // Hide the login
            $login.hide();

            // Show the logout
            $logout.show();
        }
    });

    // Deal with logouts
    $logout.on('click', function () {
        $.post('/logout', function (data) {
            // Hide name and logout
            $name.hide();
            $logout.hide();

            // Show login
            $login.show();
        });
    });
});
