
$(document).ready(function(){

    // 側欄位
    $('.invoice_setting').click(function(){
        $('.dropdown_block1').toggle('normal')
    })


// Popup color/hide and show(hover)
    $('.btn-link').click(function(event){
        var span = $(this).find('span');
        span.data('original-color', span.css('color')); // 存储原始颜色
        span.css('color', '#E94C26');  // 改变颜色
        span.addClass('color-changed'); // 标记为颜色已改变
        event.stopPropagation(); // 阻止事件向上冒泡
    });
    
    // 在按钮的事件中添加阻止冒泡
    $('.dropdown_block1').click(function(event){
        event.stopPropagation();
    })
    

    $('#fueling_invoice-popup').on('hidden.bs.modal',function(){
        // 恢复所有受影响的 <span> 元素到它们的原始颜色
        $('.btn-link').find('span').each(function() {
            var originalColor = $(this).data('original-color'); // 获取存储的原始颜色
            $(this).css('color', originalColor); // 恢复颜色
        });
    });   

    $('#fueling_pos-popup').on('hidden.bs.modal',function(){
        // 恢复所有受影响的 <span> 元素到它们的原始颜色
        $('.btn-link').find('span').each(function() {
            var originalColor = $(this).data('original-color'); // 获取存储的原始颜色
            $(this).css('color', originalColor); // 恢复颜色
        });
    }); 

    $('#fueling_pos2-popup').on('hidden.bs.modal',function(){
        // 恢复所有受影响的 <span> 元素到它们的原始颜色
        $('.btn-link').find('span').each(function() {
            var originalColor = $(this).data('original-color'); // 获取存储的原始颜色
            $(this).css('color', originalColor); // 恢复颜色
        });
    });

    $('#transport_sap-popup').on('hidden.bs.modal',function(){
        // 恢复所有受影响的 <span> 元素到它们的原始颜色
        $('.btn-link').find('span').each(function() {
            var originalColor = $(this).data('original-color'); // 获取存储的原始颜色
            $(this).css('color', originalColor); // 恢复颜色
        });
    });

    $('#shipping-popup').on('hidden.bs.modal',function(){
        // 恢复所有受影响的 <span> 元素到它们的原始颜色
        $('.btn-link').find('span').each(function() {
            var originalColor = $(this).data('original-color'); // 获取存储的原始颜色
            $(this).css('color', originalColor); // 恢复颜色
        });
    });


    

    $('.serial_setting').click(function(){
        $('.dropdown_block2').toggle('normal')
    })

    // $('.toggle_icon').click(function(){
    //     $('aside').toggle('normal')
    // })

    // console(toggle_icon)

    // 通知畫面
    $('#noti').click(function(){
        $('.mask_noti').css({right:"-434px"})
        $('.notification').animate({right:"0px"})
        $('.mask_noti').css('display','block')
        
    })

    $('#xmark').click(function(){
        $('.notification').animate({right: '-434px'},function() {
            $('.mask_noti').css('display', 'none'); // 关闭遮罩
         });
       
    })

    $('.mask_noti').click(function(){
        $('.notification').animate({right: '-434px'},function() {
            $('.mask_noti').css('display', 'none');// 关闭遮罩
         });
    })
    
    $('.notification').click(function(e){
        e.stopPropagation()
    })
    
    // 刪除功能
    $('.noti_delete').click(function(){
        // 查找所有已选中的复选框，并删除其父级 'div.message'
        $('.noti_message .message').each(function() {
            if ($(this).find('input[type="checkbox"]').is(':checked')) {
                $(this).remove(); // 删除已选中的消息
            }
            
        })
    })


   
   
})



