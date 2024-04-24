
$(document).ready(function(){

    // 側欄位
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

    // 通知畫面
    $('#noti').click(function(){
        $('.notification').animate({right:"0px"})
        $('.mask_noti').css('display','block')
        $('.mask_noti').animate({right:"-433px"})
    })

    $('#xmark').click(function(){
        $('.mask_noti').css('display','none')
        window.history.back()
    })

    $('.mask_noti').click(function(){
        $(this).removeAttr('style')
    })
    
    $('.notification').click(function(e){
        e.stopPropagation()
    })
    
    // 刪除功能
    $('.noti_delete').click(function(){
        $('.noti_delete').click(function() {
            // 查找所有已选中的复选框，并删除其父级 'div.message'
            $('.noti_message .message').each(function() {
                if ($(this).find('input[type="checkbox"]').is(':checked')) {
                    $(this).remove(); // 删除已选中的消息
                }
            });
        });
    })

    // header特效
   
})



