$(document).ready(function(){
    $('#header_sidebar').load('../header_sidebar.html')

    $('.add_unit_bt').click(function() { // 纠正选择器
        $('.add_unit_function').load('../add_unit_dialog.html', function() {
            $('.add_unit_dialog').animate({right: "0px"}); // 滑入动画
            $('.mask_add_unit').css('display', 'block'); // 显示遮罩
        });
    });
    
})
