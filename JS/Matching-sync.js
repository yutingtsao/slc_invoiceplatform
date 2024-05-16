$(document).ready(function(){
    // 加载侧边栏内容
    $('#header_sidebar').load('../header_sidebar.html');

    updateSerialNumbers();


    // // table一鍵刪除功能
    // $('.table_all_sync_bt').click(function() {
    //     // 先收集所有被选中的行
    //     var selectedRows = $('.iq-card-body tr').filter(function() {
    //         return $(this).find('input[type="checkbox"]').is(':checked');
    //     });
    
    //     // 确认是否进行删除
    //     if (selectedRows.length > 0 && confirm('確定要刪除已勾選的' + selectedRows.length + '項嗎？')) {
    //         selectedRows.each(function() {
    //             $(this).remove(); // 删除选中的行

    
    //         });
           
    
    //         updateSerialNumbers(); // 更新序号
    //         saveNewOrder(); // 假设你有这个函数来保存新的排序状态
    //     }
    // });
    // // // 初始化序号
   
    $('.table_all_sync_bt').click(function() {
        var selectedRows = $('.iq-card-body tr').filter(function() {
            return $(this).find('input[type="checkbox"]').is(':checked');
        });

        if (selectedRows.length > 0) {
            $('#itemsCount').text(selectedRows.length); // 更新 Modal 中顯示的項目數
            $('#all_sync-row_popup').modal('show'); // 顯示 Modal

            $('.all_confirm_sync_bt').off('click').on('click', function() {
                selectedRows.each(function() {
                    $(this).remove(); // 刪除選中的行
                    $('#all_sync-row_popup').modal('hide'); 
                });
                updateSerialNumbers(); // 更新序號
                saveNewOrder(); // 儲存新的排序狀態
            });
        } else {
            $('#all_sync-row-confirm_alert').modal('show'); 
        }
    });

    function updateSerialNumbers() {
        $('.iq-card-body tr').each(function(index) {
            $(this).find('td:first').text(index + 1); // 更新每一行的第一個td（序號）
        });
    }
    
    function saveNewOrder() {
        // 假設這是儲存新排序的功能
    }
    // 绑定删除按钮点击事件
     $('.table_sync_bt').click(function() {
        var $row = $(this).closest('tr');
        var siteName = $row.find('td').eq(2).text(); // 假設站點名稱位於第四個td
        $('#siteNameToDelete').text(siteName); // 將站點名稱設定到 Modal 中
        $('#sync-row_popup').modal('show'); // 顯示 Modal

        $('.confirm_sync_bt').off('click').on('click', function() {
            $row.remove(); // 刪除當前行
            updateSerialNumbers(); // 更新序號
            $('#sync-row_popup').modal('hide'); // 隱藏 Modal
        });
    });

    

    // 函数：更新所有行的序号
    function updateSerialNumbers() {
        $('tbody tr').each(function(index) {
            $(this).find('td:eq(1)').text(index + 1); // 设置序号为当前行的索引 + 1
        });
    }


    
    
    
})


