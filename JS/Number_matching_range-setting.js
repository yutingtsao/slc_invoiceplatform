$(document).ready(function(){
    // 加载侧边栏内容
    $('#header_sidebar').load('../header_sidebar.html');

    // 初始化序号
    updateSerialNumbers();

    // 绑定删除按钮点击事件
    $('.table_delete_bt').click(function() {
        var $row = $(this).closest('tr');
        var siteName = $row.find('td').eq(3).text();  // 假设站点名称位于第四个td

        // 确认是否要删除行，包括站点名称
        if (confirm("確定要删除這個站點：" + siteName + " 嗎？")) {
            $row.remove(); // 删除当前行
            updateSerialNumbers(); // 更新序号
        }
    });

    // 绑定上移按钮点击事件
    $("tbody").on("click", ".move-up", function () {
        var $row = $(this).closest("tr");
        if ($row.index() > 0) {
            $row.prev().before($row);
            updateSerialNumbers(); // 更新序号
            saveSortOrder($row, $row.prev()); // 保存排序
        }
    });

    // 绑定下移按钮点击事件
    $("tbody").on("click", ".move-down", function () {
        var $row = $(this).closest("tr");
        if ($row.index() < $("tbody tr").length - 1) {
            $row.next().after($row);
            updateSerialNumbers(); // 更新序号
            saveSortOrder($row, $row.next()); // 保存排序
        }
    });

    // 函数：更新所有行的序号
    function updateSerialNumbers() {
        $('tbody tr').each(function(index) {
            $(this).find('td:eq(1)').text(index + 1); // 设置序号为当前行的索引 + 1
        });
    }

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
    //                             <button class="table_delete_bt"><i class="fa-fw fa-solid fa-trash fa-xl " style="color: #745e48;"></i></button>
    //                             <button class="table_edit_bt"><i class="fa-fw fa-solid fa-pen-line fa-xl" style="color: #745e48;"></i></button>
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


