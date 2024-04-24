$(document).ready(function(){

    $('#xmark').click(function(){
        $('.mask_add_uni').css('display','none')
        window.history.back()
    })

    $('.mask_add_unit').click(function(){
        $(this).removeAttr('style')
    })
    
    $('.add_unit_dialog').click(function(e){
        e.stopPropagation()
    })
})