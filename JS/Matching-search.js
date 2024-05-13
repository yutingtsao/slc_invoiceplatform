$(document).ready(function(){
    // 加载侧边栏内容
    $('#header_sidebar').load('../header_sidebar.html');

    
    updateSerialNumbers();

    
    function updateSerialNumbers() {
        $('tbody tr').each(function(index) {
            $(this).find('td:eq(0)').text(index + 1); // 设置序号为当前行的索引 + 1
        });
    }

    // Popup dialog-新增個別區間功能(首頁&配號查詢頁面)
$('.add-range-row_bt').click(function(){
    $('.mask_single_range_unit').css({right:"-434px"})
    $('.single_add_range_dialog').animate({right:"0px"})
    $('.mask_single_range_unit').css('display','block')
    
})

$('#single_add_range-xmark').click(function(){
    $('.single_add_range_dialog').animate({right: '-434px'},function() {
        $('.mask_single_range_unit').css('display', 'none'); // 关闭遮罩
        $('.single_add_range_dialog input').val(''); // 清空所有输入框
        $('.single_add_range_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
        console.log('Reset complete'); // 确认重置
     });
 });

$('.mask_single_range_unit').click(function(){
    $('.single_add_range_dialog').animate({right: '-434px'},function() {
        $('.mask_single_range_unit').css('display', 'none');// 关闭遮罩
        $('.single_add_range_dialog input').val(''); // 清空所有输入框
        $('.single_add_range_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
     });
})


$('.cancel_bt').click(function(){
    $('.single_add_range_dialog').animate({right: '-434px'},function() {
        $('.mask_single_range_unit').css('display', 'none'); // 关闭遮罩
        $('.single_add_range_dialog input').val(''); // 清空所有输入框
        $('.single_add_range_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
        console.log('Reset complete'); // 确认重置
    });
})

$('.single_add_range_dialog').click(function(e){
    e.stopPropagation()
})

$('#datatable').on('click', '.add-range-row_bt', function() {
    // 获取当前行的数据
    var currentRow = $(this).closest('tr');
    var bp = currentRow.find('td').eq(1).text();
    var unit = currentRow.find('td').eq(2).text();
    var type = currentRow.find('td').eq(5).text();
    var method = currentRow.find('td').eq(6).text();
    var quantity = currentRow.find('td').eq(7).text();
    var indent = currentRow.find('td').eq(8).text();
    var startInvoice = currentRow.find('td').eq(9).text();
    var endInvoice = currentRow.find('td').eq(10).text();

    // 将数据填充到滑入对话框中
    $('.single_add_range_dialog .bp-input').val(bp).prop('disabled', true);
    $('.single_add_range_dialog .unit-input').val(unit).prop('disabled', true);
    $('.single_add_range_dialog .type-select').val(type).prop('disabled', true);
    $('.single_add_range_dialog .method-select').val(method).prop('disabled', true);
    $('.single_add_range_dialog .indent-input').val(indent).prop('disabled', true);
    $('.single_add_range_dialog .invoice-quantity-input').eq(0).val(quantity); // 张数输入框
    $('.single_add_range_dialog .invoice-start-input').eq(0).val(startInvoice); // 发票开始输入框
    $('.single_add_range_dialog .invoice-end-input').eq(0).val(endInvoice); // 发票结束输入框

  
});

})


