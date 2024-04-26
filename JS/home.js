$(document).ready(function(){
    $('#header_sidebar').load('../header_sidebar.html')

    // Popup dialog
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

    $('.cancel_bt').click(function(){
        console.log('Cancel button clicked');
        $('.add_unit_dialog').animate({right: '-434px'},function() {
            $('.mask_add_unit').css('display', 'none'); // 关闭遮罩
         });
    })
    
    $('.add_unit_dialog').click(function(e){
        e.stopPropagation()
    })
    

    $('.add_range_bt').click(function(){
        $('.mask_range_unit').css({right:"-434px"})
        $('.add_range_dialog').animate({right:"0px"})
        $('.mask_range_unit').css('display','block')
        
    })

    $('#add_range-xmark').click(function(){
        $('.add_range_dialog').animate({right: '-434px'},function() {
            $('.mask_range_unit').css('display', 'none'); // 关闭遮罩
         });
     });

    $('.mask_range_unit').click(function(){
        $('.add_range_dialog').animate({right: '-434px'},function() {
            $('.mask_range_unit').css('display', 'none');// 关闭遮罩
         });
    })


    $('.cancel_bt').click(function(){
        console.log('Cancel button clicked');
        $('.add_range_dialog').animate({right: '-434px'},function() {
            $('.mask_range_unit').css('display', 'none'); // 关闭遮罩
         });
    })

    $('.add_range_dialog').click(function(e){
        e.stopPropagation()
    })


    

   

    


})
