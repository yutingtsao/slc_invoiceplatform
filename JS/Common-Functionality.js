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
        $('#year-select').append($option);
    }
    // 4.設定預設選擇值：
    // 這行程式碼將選擇器的預設值設定為當前年份。
    $('#year-select').val(currentYear);


    // 月份範圍選擇器，自動顯示12個月分r
    // 1.選擇器初始化：
    var $monthSelect = $('#month-select')
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

    // 查詢按鈕的點擊事件
    $('.search_bt').click(function() {
        // 獲取選擇的年份和月份
        var selectedYear = $('#year-select').val();
        var selectedMonth = $('#month-select').val();

        // 確保有選擇值
        if (selectedYear === '' || selectedMonth === '') {
            alert('請選擇年份和月份');
            return; // 如果沒選擇，顯示警告並退出
        }

        // 發送 Ajax 請求
        $.ajax({
            url: '/api/invoice-status', // 後端的查詢端點
            method: 'GET', // 或 'POST'，根據後端的要求
            data: {
                year: selectedYear,
                month: selectedMonth
            },
            success: function(response) {
                // 成功時處理回應
                console.log('查詢成功', response);
                // 在這裡處理回應並更新頁面
                updatePageWithResults(response);
            },
            error: function(error) {
                // 失敗時處理錯誤
                console.error('查詢失敗', error);
                alert('查詢失敗，請稍後再試。');
            }
        });
    });

    // 清空按鈕的點擊事件
    $('.eraser_bt').click(function() {
        // 清空選擇器的值
        $('#year-select').val('');
        $('#month-select').val('');
    });

    // 用於更新頁面內容的函數
    function updatePageWithResults(results) {
        // 根據回應的內容更新頁面
        // 這個函數可以用來顯示查詢結果
        console.log('更新頁面', results);
    }


})