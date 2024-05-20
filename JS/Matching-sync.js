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
   
     // 一键同步按钮点击事件
     $('#datatable thead th input[type="checkbox"]').click(function() {
        var isChecked = $(this).is(':checked');
        $('#datatable tbody tr input[type="checkbox"]').prop('checked', isChecked);
    });
    
     $('.table_all_sync_bt').click(function() {
        var selectedRows = $('tbody tr').filter(function() {
            return $(this).find('input[type="checkbox"]').is(':checked');
        });

     

        if (selectedRows.length > 0) {
            $('#itemsCount').text(selectedRows.length); // 更新 Modal 中显示的项目数
            $('#all_sync-row_popup').modal('show'); // 显示 Modal

            $('.all_sync_bt').off('click').on('click', function() {
                selectedRows.each(function() {
                    var $row = $(this);
                    showRandomStatusDialog($row);
                });
                $('#all_sync-row_popup').modal('hide');
                updateSerialNumbers(); // 更新序号
            });
        } else {
            $('#all_sync-row-confirm_alert').modal('show'); 
        }
    });

    // 单行同步按钮点击事件
    $(document).on('click', '.table_sync_bt', function() {
        var $row = $(this).closest('tr');
        var siteName = $row.find('td').eq(2).text(); // 假设站点名称位于第三个td
        $('#siteNameToSync').text(siteName); // 将站点名称设置到 Modal 中
        $('#sync-row_popup').modal('show'); // 显示 Modal

        $('.confirm_sync_bt').off('click').on('click', function() {
            showRandomStatusDialog($row);
            $('#sync-row_popup').modal('hide'); // 隐藏 Modal
        });
    });

    // 函数：显示随机状态对话框
    function showRandomStatusDialog($row) {
        var dialogs = [
            '#matching-sync-success_popup',
            '#matching-sync-alert_popup',
            '#matching-sync-fail_popup',
            '#matching-sync-done_popup'
        ];
        var randomDialog = dialogs[Math.floor(Math.random() * dialogs.length)];
        $(randomDialog).modal('show');

        if (randomDialog === '#matching-sync-success_popup') {
            $(randomDialog).off('hidden.bs.modal').on('hidden.bs.modal', function() {
                var currentTime = new Date().toLocaleString();
                $row.find('td').eq(5).text('已同步'); // 更新同步状态
                $row.find('td').eq(6).text(currentTime); // 更新同步时间
                $row.find('input[type="checkbox"]').prop('checked', false); // 取消选中状态
            });
        }
    }

    // 函数：更新所有行的序号
    function updateSerialNumbers() {
        $('tbody tr').each(function(index) {
            $(this).find('td:eq(1)').text(index + 1); // 设置序号为当前行的索引 + 1
        });
    }
    
    
    
})


