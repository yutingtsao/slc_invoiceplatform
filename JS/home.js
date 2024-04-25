$(document).ready(function(){
    $('#header_sidebar').load('../header_sidebar.html')

    $('.add_unit_bt').click(function(){
        $('.mask_add_unit').css({right:"-434px"})
        $('.add_unit_dialog').animate({right:"0px"})
        $('.mask_add_unit').css('display','block')
        
    })

    $('#add_unit-xmark').click(function(){
        $('.add_unit_dialog').animate({right: '-434px'},function() {
            $('.mask_add_unit').css('display', 'none'); // 关闭遮罩
         });
     });


     $('.mask_add_unit').click(function(){
        $('.add_unit_dialog').animate({right: '-434px'},function() {
            $('.mask_add_unit').css('display', 'none');// 关闭遮罩
         });
    })
    
    $('.add_unit_dialog').click(function(e){
        e.stopPropagation()
    })
    
})
