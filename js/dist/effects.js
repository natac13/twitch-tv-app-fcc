'use strict';

$(document).ready(function () {
    var $main = $('main');
    $main.on('click', '#ohNo', function () {
        $(this).closest('li').find('.img-rounded').toggle('bounce');
        if ($(this).html() == 'Click Me, I got lost!') {
            $(this).html('Please Do Not Click');
        } else {
            $(this).html('Click Me, I got lost!');
        }
    });

    $('.navbar-right').on('click', 'li', function () {
        $main.find('li').show('size');
        $main.find('.img-rounded').show('blind');
    });

    $main.on('click', 'h2', function () {
        $(this).closest('li').hide('puff');
    });

    $main.on('click', '#bio', function () {
        $(this).closest('li').hide('clip');
    });

    $main.on('click', '.img-rounded', function () {
        $(this).hide('slide');
    });
});
//# sourceMappingURL=effects.js.map