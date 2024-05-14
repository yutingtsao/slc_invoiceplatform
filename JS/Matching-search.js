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


// Popup dialog-新增個別區間功能-表格資料帶入
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





    // Popup dialog-資訊查看
    $('.info-row_bt').click(function(){
        $('.mask_info_check').css({right:"-434px"})
        $('.info_check_dialog').animate({right:"0px"})
        $('.mask_info_check').css('display','block')
        
    })
    
    $('#info_check-xmark').click(function(){
        $('.info_check_dialog').animate({right: '-434px'},function() {
            $('.mask_info_check').css('display', 'none'); // 关闭遮罩
        
            console.log('Reset complete'); // 确认重置
         });
     });
    
    $('.mask_info_check').click(function(){
        $('.info_check_dialog').animate({right: '-434px'},function() {
            $('.mask_info_check').css('display', 'none');// 关闭遮罩

         });
    })
    
    
    $('.cancel_bt').click(function(){
        $('.info_check_dialog').animate({right: '-434px'},function() {
            $('.mask_info_check').css('display', 'none'); // 关闭遮罩
            console.log('Reset complete'); // 确认重置
        });
    })
    
    $('.info_check_dialog').click(function(e){
        e.stopPropagation()
    })



    // Popup dialog-資訊查看-進度條與狀態顯示
    updateProgressBar();

    function updateProgressBar() {
        let progress = 0;
        let statusText = '';

        // 定义状态元素
        const uploadSection = $('.dialog_wrapper-info_section:contains("上傳狀態")');
        const updateSection = $('.dialog_wrapper-info_section:contains("更新狀態")');
        const syncSection = $('.dialog_wrapper-info_section:contains("同步狀態")');

        const uploadStatus = uploadSection.find('.info_status').text().trim();
        const uploadTime = uploadSection.find('.info_status_time').text().trim();
        const updateStatus = updateSection.find('.info_status').text().trim();
        const updateTime = updateSection.find('.info_status_time').text().trim();
        const syncStatus = syncSection.find('.info_status').text().trim();
        const syncTime = syncSection.find('.info_status_time').text().trim();

        // 更新上傳狀態
        if (uploadStatus === '狀態:完成' && uploadTime !== '') {
            progress = 33;
            statusText = 'Processing...';
        } else if (uploadStatus === '狀態:未處理') {
            uploadSection.find('.info_status').text('狀態:處理中');
            uploadSection.find('.info_status_time').text('');
        }

        // 更新更新狀態
        if (uploadStatus === '狀態:完成' && uploadTime !== '') {
            if (updateStatus === '狀態:完成' && updateTime !== '') {
                progress = 66;
                statusText = 'Updating...';
            } else if (updateStatus === '狀態:未處理') {
                updateSection.find('.info_status').text('狀態:處理中');
                updateSection.find('.info_status_time').text('');
            }
        }

        // 更新同步狀態
        if (uploadStatus === '狀態:完成' && uploadTime !== '' &&
            updateStatus === '狀態:完成' && updateTime !== '') {
            if (syncStatus === '狀態:完成' && syncTime !== '') {
                progress = 100;
                statusText = 'Completed';
            } else if (syncStatus === '狀態:未處理') {
                syncSection.find('.info_status').text('狀態:處理中');
                syncSection.find('.info_status_time').text('');
            }
        }

        // 更新进度条
        $('.progress-bar').css('width', progress + '%').text(progress + '%');

        // 更新百分比标题
        $('.percentage_title span:first-child').text(progress + '%');
        $('.percentage_title .percentage_subtitle').text(statusText);
    }
})


