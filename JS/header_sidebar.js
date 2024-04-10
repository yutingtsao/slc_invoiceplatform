
$(document).ready(function(){
    $('.invoice_setting').click(function(){
        $('.dropdown_block1').toggle('normal')
    })

    $('.serial_setting').click(function(){
        $('.dropdown_block2').toggle('normal')
    })

    // $('.toggle_icon').click(function(){
    //     $('aside').toggle('normal')
    // })

    // console(toggle_icon)
})

$(document).ready(function(){
    $('.fa-solid fa-xmark').click(function(){
        $('.notification').animate({right:"0px"})
        $('.mask_noti').css('display','block')
        $('.mask_noti').animate({right:"-433px"})
    })

    // $('.right_side').click(function(){
    //     $('.notification').animate({right:"-433px"})
    // })

    $('.noto_xmark').click(function(){
        $('.mask_noti').css('display','none')
        window.history.back()
    })

    $('.mask_noti').click(function(){
        $(this).removeAttr('style')
    })
    
    $('.notification').click(function(e){
        e.stopPropagation()
    })

    
})

