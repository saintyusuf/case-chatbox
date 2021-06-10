$(document).on('click', '.message-box-button', function() {

    if(!$('.message-box').hasClass('show')){
        $('.message-box').fadeIn(200).addClass('show')
    } else {
        $('.message-box').fadeOut(200).removeClass('show')
    }

})

$(document).on('click', '.message-box-closer', function() {

    $('.message-box').fadeOut(200).removeClass('show')

})