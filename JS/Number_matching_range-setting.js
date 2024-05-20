$(document).ready(function(){
    // 加载侧边栏内容
    $('#header_sidebar').load('../header_sidebar.html');

    updateSerialNumbers();


    // // table一鍵刪除功能
    // $('.table_all_delete_bt').click(function() {
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
   
    $('#datatable thead th input[type="checkbox"]').click(function() {
        var isChecked = $(this).is(':checked');
        $('#datatable tbody tr input[type="checkbox"]').prop('checked', isChecked);
    });

    
    $('.table_all_delete_bt').click(function() {
        var selectedRows = $('.iq-card-body tr').filter(function() {
            return $(this).find('input[type="checkbox"]').is(':checked');
        });

        if (selectedRows.length > 0) {
            $('#itemsCount').text(selectedRows.length); // 更新 Modal 中顯示的項目數
            $('#all_delete-row_popup').modal('show'); // 顯示 Modal

            $('.all_confirm_delete_bt').off('click').on('click', function() {
                selectedRows.each(function() {
                    $(this).remove(); // 刪除選中的行
                    $('#all_delete-row_popup').modal('hide'); 
                });
                updateSerialNumbers(); // 更新序號
                saveNewOrder(); // 儲存新的排序狀態
            });
        } else {
            $('#all_delete-row-confirm_alert').modal('show'); 
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
     $('.table_delete_bt').click(function() {
        var $row = $(this).closest('tr');
        var siteName = $row.find('td').eq(4).text(); // 假設站點名稱位於第四個td
        $('#siteNameToDelete').text(siteName); // 將站點名稱設定到 Modal 中
        $('#delete-row_popup').modal('show'); // 顯示 Modal

        $('.confirm_delete_bt').off('click').on('click', function() {
            $row.remove(); // 刪除當前行
            updateSerialNumbers(); // 更新序號
            $('#delete-row_popup').modal('hide'); // 隱藏 Modal
        });
    });

    

    // 函数：更新所有行的序号
    function updateSerialNumbers() {
        $('tbody tr').each(function(index) {
            $(this).find('td:eq(1)').text(index + 1); // 设置序号为当前行的索引 + 1
        });
    }


    
    // 移動行數功能move
    $('td').has('.fa-bars').click(function() {
        $('#move-row_popup').modal('show');  // 顯示 Modal
        var currentRow = $(this).closest('tr');  // 獲取當前行

        $('.confirm_move-insidecheck_bt').off('click').on('click', function() { // 綁定點擊事件到確認按鈕
            var totalRows = $('#datatable tbody tr').length;
            var desiredPosition = $('#desiredPosition').val();  // 從 input 獲取輸入的行號

            // 檢查輸入是否為有效數字且在範圍內
            if(desiredPosition && !isNaN(desiredPosition) && desiredPosition > 0 && desiredPosition <= totalRows) {
                moveRow(currentRow, desiredPosition);
                updateRowNumbers();  // 更新所有行的順序號碼
            } else {
                $('#move-row_alert').modal('show'); 
            }
            
        });
    });

    // 函數：移動行到指定位置
    function moveRow(row, position) {
        var index = position - 1; // 因為索引是從0開始的
        var targetRow = $('#datatable tbody tr').eq(index); // 獲取目標行

        if (index < row.index()) {
            targetRow.before(row);  // 如果目標位置在當前行之前，將當前行移動到目標行之前
        } else {
            targetRow.after(row);  // 如果目標位置在當前行之後，將當前行移動到目標行之後
        }
    }

    // 函數：更新所有行的順序號碼
    function updateRowNumbers() {
        $('#datatable tbody tr').each(function(index) {
            $(this).find('td:eq(1)').text(index + 1);  // 更新每一行的第二個td（順序號）
        });
    }


    


    // // 移動按鈕(順序調整，序列號不影響)

    //  // 綁定點擊事件到包含移動圖標的td元素
    //  $('td').has('.fa-bars').click(function() {
    //     var currentRow = $(this).closest('tr'); // 獲取當前行
    //     var totalRows = $('#datatable tbody tr').length; // 獲取總行數
    //     var desiredPosition = prompt("請輸入您希望將此行移動到的行號（1至" + totalRows + "）:");
        
    //     // 檢查輸入是否為有效數字且在範圍內
    //     if(desiredPosition !== null && !isNaN(desiredPosition) && desiredPosition > 0 && desiredPosition <= totalRows) {
    //         moveRow(currentRow, desiredPosition);
    //         updateRowNumbers(); // 更新所有行的順序號碼
    //     } else {
    //         alert("輸入無效，請輸入1至" + totalRows + "之間的數字。");
    //     }
    // });

    // // 函數：移動行到指定位置
    // function moveRow(row, position) {
    //     var index = position - 1; // 因為索引是從0開始的
    //     var targetRow = $('#datatable tbody tr').eq(index); // 獲取目標行

    //     if (index < row.index()) {
    //         targetRow.before(row); // 如果目標位置在當前行之前，將當前行移動到目標行之前
    //     } else {
    //         targetRow.after(row); // 如果目標位置在當前行之後，將當前行移動到目標行之後
    //     }
    // }

    // // 函數：更新所有行的順序號碼
    // function updateRowNumbers() {
    //     $('#datatable tbody tr').each(function(index) {
    //         $(this).find('td:eq(1)').text(index + 1); // 更新每一行的第二個td（順序號）
    //     });
    // }
     
    
    
    
    // function saveNewOrder() {
    //     // 收集所有当前的行顺序，通常是收集某个标识符
    //     var order = $('.iq-card-body tr').map(function() {
    //         return $(this).find('td').eq(2).text(); // 假设标识符在第三个td
    //     }).get();
    
    //     $.ajax({
    //         url: '/api/save-order',
    //         type: 'POST',
    //         contentType: 'application/json',
    //         data: JSON.stringify({ order: order }),
    //         success: function(response) {
    //             console.log('Order saved successfully');
    //         },
    //         error: function() {
    //             alert('Failed to save order');
    //         }
    //     });
    // }
    

    // // 函数：保存排序状态（需自行实现服务器端逻辑）
    // function saveSortOrder($row1, $row2) {
    //     // 可以在这里发送 AJAX 请求来保存顺序
    //     console.log("Order saved for", $row1.find('td:eq(1)').text(), "and", $row2.find('td:eq(1)').text());
    //     // 实际的 AJAX 调用代码应根据具体需求实现
    // }


    // // 初始化序号并从服务器获取初始排序
    // fetchAndDisplayRows();

    // // 删除按钮点击事件
    // $('.table_delete_bt').click(function() {
    //     if (confirm("確定要删除這個站點嗎？")) {
    //         var row = $(this).closest('tr');
    //         var id = row.data('id'); // 假设每行有一个数据属性'data-id'标识唯一ID
    //         row.remove();
    //         updateSerialNumbers();
    //         saveOrderToServer();
    //     }
    // });

    // // 上移和下移按钮点击事件，保存新顺序
    // $('.move-up, .move-down').click(function() {
    //     var $row = $(this).closest('tr');
    //     var moved = false;
        
    //     if ($(this).hasClass('move-up') && $row.index() > 0) {
    //         $row.prev().before($row);
    //         moved = true;
    //     } else if ($(this).hasClass('move-down') && $row.index() < $('tbody tr').length - 1) {
    //         $row.next().after($row);
    //         moved = true;
    //     }

    //     if (moved) {
    //         updateSerialNumbers();
    //         saveOrderToServer();
    //     }
    // });

    // function updateSerialNumbers() {
    //     $('tbody tr').each(function(index) {
    //         $(this).find('td:eq(1)').text(index + 1);
    //     });
    // }

    // function saveOrderToServer() {
    //     var order = $('tbody tr').map(function() {
    //         return $(this).data('id');
    //     }).get();

    //     $.ajax({
    //         url: '/api/save-order',
    //         method: 'POST',
    //         contentType: 'application/json',
    //         data: JSON.stringify({ order: order }),
    //         success: function(response) {
    //             console.log('Order saved successfully');
    //         },
    //         error: function() {
    //             alert('Failed to save order');
    //         }
    //     });
    // }

    // function fetchAndDisplayRows() {
    //     $.ajax({
    //         url: '/api/fetch-rows',
    //         method: 'GET',
    //         success: function(rows) {
    //             var tbody = $('tbody').empty();
    //             rows.forEach(function(row, index) {
    //                 tbody.append(
    //                     `<tr data-id="${row.id}">
    //                         <td><input type="checkbox"></td>
    //                         <td>${index + 1}</td>
    //                         <td>${row.bp}</td>
    //                         <td>${row.site}</td>
    //                         <td>${row.taxNumber}</td>
    //                         <td>${row.pump}</td>
    //                         <td>${row.category}</td>
    //                         <td>${row.purpose}</td>
    //                         <td>
    //                             <button class="btn btn-outline-secondary btn-sm move-up">上移</button>
    //                             <button class="btn btn-outline-secondary btn-sm move-down">下移</button>
    //                         </td>
    //                         <td>
    //                             <button class="table_delete_bt"><i class="fa-fw fa-solid fa-trash fa-lg " style="color: #745e48;"></i></button>
    //                             <button class="table_edit_bt"><i class="fa-fw fa-solid fa-pen-line fa-lg" style="color: #745e48;"></i></button>
    //                         </td>
    //                     </tr>`
    //                 );
    //             });
    //             updateSerialNumbers();
    //         }
    //     });
    // }

    // app.post('/api/save-order', (req, res) => {
    //     const { order } = req.body;
    //     // 将order数组保存到数据库
    //     // 假设有一个函数saveOrder(order)处理数据库保存逻辑
    //     saveOrder(order);
    //     res.send({ status: 'success' });
    // });
    
    // app.get('/api/fetch-rows', (req, res) => {
    //     // 从数据库获取排序后的行数据
    //     // 假设有一个函数
    
    
    
})


