$(document).ready(function(){
    $('#header_sidebar').load('../header_sidebar.html')

    
    

    $('.add_range_bt').click(function(){
        $('.mask_range_unit').css({right:"-434px"})
        $('.add_range_dialog').animate({right:"0px"})
        $('.mask_range_unit').css('display','block')
        
    })

    $('#add_range-xmark').click(function(){
        $('.add_range_dialog').animate({right: '-434px'},function() {
            $('.mask_range_unit').css('display', 'none'); // 关闭遮罩
            $('.add_range_dialog input').val(''); // 清空所有输入框
            $('.add_range_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
            console.log('Reset complete'); // 确认重置
         });
     });

    $('.mask_range_unit').click(function(){
        $('.add_range_dialog').animate({right: '-434px'},function() {
            $('.mask_range_unit').css('display', 'none');// 关闭遮罩
            $('.add_range_dialog input').val(''); // 清空所有输入框
            $('.add_range_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
         });
    })


    $('.cancel_bt').click(function(){
        $('.add_range_dialog').animate({right: '-434px'},function() {
            $('.mask_range_unit').css('display', 'none'); // 关闭遮罩
            $('.add_range_dialog input').val(''); // 清空所有输入框
            $('.add_range_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
            console.log('Reset complete'); // 确认重置
        });
    })

    $('.add_range_dialog').click(function(e){
        e.stopPropagation()
    })


   

    


})
