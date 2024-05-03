$(document).ready(function(){

    // Home-card-selector

    // 1.獲取當前年份
    // 使用new Date().getFullYear()取得今年的年份。
    var currentYear = new Date().getFullYear();

    // 2.設定年份範圍：
    // 定義過去五年的起點，設定為currentYear - 5。
    var startYear = currentYear - 4;

    // 3.取得選擇器：
    // 用jQuery選擇ID為chart-year的選擇器。
    var $yearSelect = $('#chart-year');

    // 4.清空現有選項：
    // 使用empty()清空選擇器中的所有選項。
    $yearSelect.empty();

    // 5.添加選項：
    // 使用一個循環從過去五年到今年，每年創建一個選項並將其添加到選擇器。
    for (var y = startYear; y <= currentYear; y++) {
        var $option = $('<option>').val(y).text(y); // 使用jQuery創建選項
        $yearSelect.append($option); // 將選項添加到選擇器
    }

    // 6.設定預設選擇值：
    // 將選擇器的預設值設定為當前年份。
    $yearSelect.val(currentYear);

    // Home-quick_setting-selector
     // 年份範圍選擇器，自動選擇+-10year
    // 1.獲取當前年份：
    var currentYear=new Date().getFullYear();
    // 2.設定年份範圍：
    var range=10;
    // 3.添加選項到選擇器：
    // 計算year的值，這是currentYear加上i。
    // 使用jQuery的$('<option>')建立一個選項，並設定val()為年份、text()為年份文字。
    // 使用$('#year-select').append($option)將選項添加到選擇器。
    for (var y= -range; y<= range; y++){
        var year = currentYear+y;
        var $option = $('<option>').val(year).text(year);
        $('.year-select').append($option);
    }
    // 4.設定預設選擇值：
    // 這行程式碼將選擇器的預設值設定為當前年份。
    $('.year-select').val(currentYear);


    // 月份範圍選擇器，自動顯示12個月分r
    // 1.選擇器初始化：
    var $monthSelect = $('.month-select')
    //2.清空現有的選項，保留 "請選擇月份"
    $monthSelect.find('option:not(:first)').remove();
    // 3.添加12個月份
    var monthNames = [
        "1月", "2月", "3月", "4月", "5月", "6月",
        "7月", "8月", "9月", "10月", "11月", "12月"
    ];
    // 4.添加月份選項：
    // 這個循環遍歷月份名稱，並為每個月份創建一個選項：
    // 使用$('<option>')生成選項，設定值val()為月份的序號（1至12），顯示文字text()為月份名稱。
    // 使用append()將選項添加到選擇器。    
    for (var m = 0; m < monthNames.length; m++){
        var $option = $('<option>').val(m+1).text(monthNames[m]);
        $monthSelect.append($option);
    }
    
// Popup dialog-新增區間單位(首頁&配號區間設定)
$('.add_unit_bt').click(function(){
    $('.mask_add_unit').css({right:"-434px"})
    $('.add_unit_dialog').animate({right:"0px"})
    $('.mask_add_unit').css('display','block')
    
})

$('#add_unit-xmark').click(function(){
    $('.add_unit_dialog').animate({right: '-434px'},function() {
        $('.mask_add_unit').css('display', 'none'); // 关闭遮罩
        $('.add_unit_dialog input').val(''); // 清空所有输入框
        $('.add_unit_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
     });
 });


 $('.mask_add_unit').click(function(){
    $('.add_unit_dialog').animate({right: '-434px'},function() {
        $('.mask_add_unit').css('display', 'none');// 关闭遮罩
        $('.mask_add_unit').css('display', 'none'); // 关闭遮罩
        $('.add_unit_dialog input').val(''); // 清空所有输入框
        $('.add_unit_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
     });
})

$('.cancel_bt').click(function(){
    $('.add_unit_dialog').animate({right: '-434px'},function() {
        $('.mask_add_unit').css('display', 'none'); // 关闭遮罩
        $('.add_unit_dialog input').val(''); // 清空所有输入框
        $('.add_unit_dialog select').prop('selectedIndex', "0"); // 重置下拉选择器
     });
})

$('.add_unit_dialog').click(function(e){
    e.stopPropagation()
})


// Popup dialog-新增區間功能(首頁&配號查詢頁面)

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


// Popup dialog-編輯區間單位(首頁&配號區間設定)
 // 绑定编辑按钮事件

$('.table_edit_bt').click(function(){
    var $row = $(this).closest('tr');

    // 获取行数据
    var unit = $row.find('td').eq(2).text();
    var site = $row.find('td').eq(3).text();
    var taxId = $row.find('td').eq(4).text();
    var category = $row.find('td').eq(6).text();
    var purpose = $row.find('td').eq(7).text();

    // 设置编辑对话框中的值
    $('#edit-unit').val(unit);
    $('#edit-bp').val(site);
    $('#edit-tax-id').val(taxId);
    $('#edit-type').val(category).change();
    $('#edit-method').val(purpose).change();

     // 显示编辑对话框
     $('.mask_edit_unit').css({right: "-434px"});
     $('.edit_unit_dialog').animate({right: "0px"});
     $('.mask_edit_unit').css('display', 'block');

});


$('#edit_unit-xmark').click(function(){
    $('.edit_unit_dialog').animate({right: '-434px'},function() {
        $('.mask_edit_unit').css('display', 'none'); // 关闭遮罩
    
     });
 });

 $('.mask_edit_unit').click(function(){
    $('.edit_unit_dialog').animate({right: '-434px'},function() {
        $('.mask_edit_unit').css('display', 'none');// 关闭遮罩
     });
})

$('.cancel_bt').click(function(){
    $('.edit_unit_dialog').animate({right: '-434px'},function() {
        $('.mask_edit_unit').css('display', 'none'); // 关闭遮罩
     });
})

$('.edit_unit_dialog').click(function(e){
    e.stopPropagation()
})


    // 查詢按鈕的點擊事件
    $('.fueling_invoice-popup-search_bt').click(function() {
        window.location.href = "../Invoice-fueling_invoice.html"
        // var selectedYear = $('#year-select').val();
        // var selectedMonth = $('#month-select').val();
    
        // if (selectedYear === '' || selectedMonth === '') {
        //     alert('請選擇年份和月份');
        //     return;
        // }
    
        // $.ajax({
        //     url: '/api/invoice-status',
        //     method: 'GET',
        //     data: {
        //         year: selectedYear,
        //         month: selectedMonth
        //     },
        //     success: function(response) {
        //         console.log('查詢成功', response);
        //         // 使用window.location.href导航到Invoice-fueling_invoice.html，并传递参数
        //         window.location.href = `Invoice-fueling_invoice.html?year=${selectedYear}&month=${selectedMonth}`;
    
        //     },
        //     error: function(error) {
        //         console.error('查詢失敗', error);
        //         alert('查詢失敗，請稍後再試。');
        //     }
        // });
    });


    $('.fueling_pos-popup-search_bt').click(function() {
        window.location.href = "../Invoice-fueling_pos.html"
    });

    $('.fueling_pos2-popup-search_bt').click(function() {
        window.location.href = "../Invoice-fueling_pos2.html"
    });


    $('.fueling_pos2-popup-search_bt').click(function() {
        window.location.href = "../Invoice-fueling_pos2.html"
    });

    $('.transport_sap-popup-search_bt').click(function() {
        window.location.href = "../Invoice-transport_sap.html"
    });

    $('.shipping-popup-search_bt').click(function() {
        window.location.href = "../Invoice-shipping.html"
    });

    $('.matching_function-search_bt').click(function() {
        window.location.href = "../Matching-function.html"
    });


    // 清空按鈕的點擊事件
    $('.eraser_bt').click(function() {
        // 清空選擇器的值
        $('.year-select').val('');
        $('.month-select').val('');
        $('.change-status').val('');
        $('.invoice-status').val('');
        $('.error-status').val('');
        $('.bp-input').val('');
        $('.station-name').val('');
    });

    // 用於更新頁面內容的函數
    function updatePageWithResults(results) {
        // 根據回應的內容更新頁面
        // 這個函數可以用來顯示查詢結果
        console.log('更新頁面', results);
    }


    $('#unit-select').change(function() { // 当选择单位时
        var selectedUnit = $(this).val(); // 获取所选值

        // 根据选择的单位加载数据，并填入其他字段
        if (selectedUnit) {
            loadUnitData(selectedUnit); // 调用自定义函数加载数据
        }
    });


    $('.unit-select').select2();


    $('.unit-select').change(function() { // 当选择一个单位时
        var selectedUnit = $(this).val(); // 获取选择的单位
        loadUnitData(selectedUnit); // 传递给函数
    });
    
    function loadUnitData(unit) {
        // 示例数据，可以替换为实际数据库数据
        var unitData = {
            '山隆通運-總公司': {
                bp: 'L110',
                indent: 'AK',
                type: '匯開',
                method: 'WEB'
            },
            '山隆通運-電子發票(L11A)': {
                bp: 'L11A',
                indent: 'AK',
                type: '天吉POS',
                method: 'API'
            }
        };
    
        var data = unitData[unit]; // 根据单位选择数据
    
        if (data) {
            $('.bp-input').val(data.bp); // 填入 BP
            $('.indent-input').val(data.indent); // 填入字轨
            $('.type-select').val(data.type); // 设置类别
            $('.method-select').val(data.method); // 设置用途
        }

        
    }

    $('.unit-select').change(function() { // 当选择单位时
        var selectedUnit = $(this).val(); // 获取选择的单位
        loadUnitData(selectedUnit); // 加载数据
        console.log('Unit changed:', selectedUnit);
    });
    


   
})