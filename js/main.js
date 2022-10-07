$(function(){

    let closePopup = function(){
        $('.popup-container').css('display', 'none');
    };

    let clearForm = function(){
        $('.popup-container > input[type="text"]').val('');
    };

    $('.close').on('click', function(){
        clearForm();
        closePopup();
    });
});
