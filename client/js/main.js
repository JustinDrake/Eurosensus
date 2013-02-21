var object = {
    title: 'Icecream for Europe',
    caption: 'It is the right for every child in Europe to have an icecream every week. Please help us reach 1 million signatures!',
    progress: '40',
    image: 'icecream.jpg'
};

var $summary = $('<li></li>')
    .addClass('span4');

var $thumbnail = $('<div></div>')
    .addClass('thumbnail');

var $image = $('<img></img>')
    .prop('src', 'img/' + object.image);

var $title = $('<h3></h3>')
    .text(object.title);

var $paragraph = $('<p></p>')
    .text(object.caption)

var $caption = $('<div></div>')
    .addClass('caption')
    .append($title)
    .append($paragraph);

var $footer = $("<p><a href='#' class='btn'><i class='icon-star'></i> Star</a><a href='#' class='btn pull-right'><i class='icon-share'></i> Share</a></p>");

// $summary
//     .append($thumbnail)
//     .appendTo('ul');

        // <li class='span4'>
        //     <div class='thumbnail'>
        //         <img src='img/icecream.jpg' class='span4'/>
        //         <div class='caption'>
        //             <h3></h3>

        //             <p></p>

        //             <div class='progress progress-striped'>
        //                 <div class='bar' style='width: 40%;'></div>
        //             </div>


        //         </div>
        //     </div>
        // </li>