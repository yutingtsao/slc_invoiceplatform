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

    function initializeYearMonthSelectors(yearSelector, monthSelector) {
        // 初始化年份选择器
        var currentYear = new Date().getFullYear();
        var range = 10;
        for (var y = -range; y <= range; y++) {
            var year = currentYear + y;
            var $yearOption = $('<option>').val(year).text(year);
            $(yearSelector).append($yearOption);
        }
        $(yearSelector).val(currentYear);
    
        // 初始化月份选择器
        var $monthSelect = $(monthSelector);
        $monthSelect.find('option:not(:first)').remove();
        var monthNames = [
            "1月", "2月", "3月", "4月", "5月", "6月",
            "7月", "8月", "9月", "10月", "11月", "12月"
        ];
        for (var m = 0; m < monthNames.length; m++) {
            var $monthOption = $('<option>').val(m + 1).text(monthNames[m]);
            $monthSelect.append($monthOption);
        }
    }

    $(document).ready(function() {
        // 初始化各种页面和弹窗中的年份和月份选择器
        initializeYearMonthSelectors('.year-select', '.month-select');
        initializeYearMonthSelectors('.invoice-fueling_year-select', '.invoice-fueling_month-select');
        initializeYearMonthSelectors('.invoice-fueling_year-result', '.invoice-fueling_month-result');
        initializeYearMonthSelectors('.invoice-fueling-pos_year-result', '.invoice-fueling-pos_month-result');
        initializeYearMonthSelectors('.invoice-fueling-pos_year-select', '.invoice-fueling-pos_month-select');
        initializeYearMonthSelectors('.invoice-fueling-pos2_year-select', '.invoice-fueling-pos2_month-select');
        initializeYearMonthSelectors('.invoice-fueling-pos2_year-result', '.invoice-fueling-pos2_month-result');
        initializeYearMonthSelectors('.transport-sap_year-select', '.transport-sap_month-select');
        initializeYearMonthSelectors('.transport-sap_year-result', '.transport-sap_month-result');
        initializeYearMonthSelectors('.invoice-shipping_year-select', '.invoice-shipping_month-select');
        initializeYearMonthSelectors('.invoice-shipping_year-result', '.invoice-shipping_month-result');
        initializeYearMonthSelectors('.matching-search_year-select', '.matching-search_month-select');
        initializeYearMonthSelectors('.matching-search_year-inside-result', '.matching-search_month-inside-result');
        initializeYearMonthSelectors('.matching-search_year-result', '.matching-search_month-result');
        initializeYearMonthSelectors('.matching-function_year-select');
        initializeYearMonthSelectors('.matching-function_year-result');
    
        // 初始化保存和加载按钮
        initSaveYearMonthButtons();
        initLoadYearMonth();
        initAddRangeButton();
        initSyncYearMonthOnSearch();
    });

    function init() {
        initSaveYearMonthButtons();
        initLoadYearMonth();
        initAddRangeButton();
        initSyncYearMonthOnSearch();
    }
    
    // $(document).ready(function() {
    //     // 初始化选择器
    //     initializeYearMonthSelectors('.year-select', '.month-select');
    //     initializeYearMonthSelectors('.invoice-fueling_year-select', '.invoice-fueling_month-select');
    //     initializeYearMonthSelectors('.invoice-fueling_year-result', '.invoice-fueling_month-result');
    //     initializeYearMonthSelectors('.invoice-fueling-pos_year-result', '.invoice-fueling-pos_month-result');
    //     initializeYearMonthSelectors('.invoice-fueling-pos_year-select', '.invoice-fueling-pos_month-select');
    //     initializeYearMonthSelectors('.invoice-fueling-pos2_year-result', '.invoice-fueling-pos2_month-result');
    //     initializeYearMonthSelectors('.invoice-fueling-pos2_year-select', '.invoice-fueling-pos2_month-select');
    //     initializeYearMonthSelectors('.transport-sap_year-select', '.transport-sap_month-select');
    //     initializeYearMonthSelectors('.transport-sap_year-result', '.transport-sap_month-result');
    //     initializeYearMonthSelectors('.matching-search_year-select', '.matching-search_month-select');
    //     initializeYearMonthSelectors('.matching-search_year-inside-result', '.matching-search_month-inside-result');
    //     initializeYearMonthSelectors('.matching-search_year-result', '.matching-search_month-result');
    //     initializeYearMonthSelectors('.matching-function_year-select', '.matching-function_type-result');
    //     initializeYearMonthSelectors('.matching-function_year-result', '.matching-function_month-result');
    
    //     // 初始化所有功能
    //     init();
    // });


    function saveYearMonthToLocalStorage(selectorYear, selectorMonth, nextPage) {
        var selectedYear = $(selectorYear).val();
        var selectedMonth = $(selectorMonth).val();

        // 储存到localStorage
        localStorage.setItem('selectedYear', selectedYear);
        localStorage.setItem('selectedMonth', selectedMonth);

        // 导航到指定的页面
        window.location.href = nextPage;
    }

    function loadYearMonthFromLocalStorage(selectorYear, selectorMonth) {
        // 从localStorage获取年份和月份
        var year = localStorage.getItem('selectedYear');
        var month = localStorage.getItem('selectedMonth');
    
        // 确保下拉选择器已经在DOM中
        if ($(selectorYear).length > 0 && $(selectorMonth).length > 0) {
            // 设置到对应的选择器中
            $(selectorYear).val(year);
            $(selectorMonth).val(month);
        } else {
            // 如果没有找到选择器，可以在这里输出一些错误信息或进行其他处理
            console.log("Cannot find selectors in the DOM.");
        }
    }

    function syncSelectors(selectorYearSrc, selectorMonthSrc, selectorYearDest, selectorMonthDest) {
        $(selectorYearSrc).change(function() {
            var year = $(this).val();
            $(selectorYearDest).val(year);
        });

        $(selectorMonthSrc).change(function() {
            var month = $(this).val();
            $(selectorMonthDest).val(month);
        });
    }

    function initSaveYearMonthButtons() {
        $('.matching_function-search_bt').click(function() {
            saveYearMonthToLocalStorage('.matching-function_year-select', '.matching-function_type-result', '../Matching-function.html');
        });

        $('.matching_search-search_bt').click(function() {
            saveYearMonthToLocalStorage('.matching-search_year-select', '.matching-search_month-select', '../Matching-search.html');
        });

        $('.fueling_invoice-popup-search_bt').click(function() {
            saveYearMonthToLocalStorage('.invoice-fueling_year-select', '.invoice-fueling_month-select', '../Invoice-fueling_invoice.html');
        });

        $('.fueling_pos-popup-search_bt').click(function() {
            saveYearMonthToLocalStorage('.invoice-fueling-pos_year-select', '.invoice-fueling-pos_month-select', '../Invoice-fueling_pos.html');
        });

        $('.fueling_pos2-popup-search_bt').click(function() {
            saveYearMonthToLocalStorage('.invoice-fueling-pos2_year-select', '.invoice-fueling-pos2_month-select', '../Invoice-fueling_pos2.html');
        });

        $('.transport_sap-popup-search_bt').click(function() {
            saveYearMonthToLocalStorage('.transport-sap_year-select', '.transport-sap_month-select', '../Invoice-transport_sap.html');
        });

        $('.shipping-popup-search_bt').click(function() {
            saveYearMonthToLocalStorage('.invoice-shipping_year-select', '.invoice-shipping_month-select', '../Invoice-shipping.html');
        });


    }

    function initLoadYearMonth() {
        if (window.location.pathname.endsWith('Matching-function.html')) {
            loadYearMonthFromLocalStorage('.matching-function_year-result', '.matching-function_type-result');
        } else if (window.location.pathname.endsWith('matching-search.html')) {
            loadYearMonthFromLocalStorage('.matching-search_year-result', '.matching-search_month-result');
            syncSelectors('.matching-search_year-inside-result', '.matching-search_month-inside-result','.matching-search_year-result', '.matching-search_month-result');

        } else if (window.location.pathname.endsWith('Matching-search.html')) {
            loadYearMonthFromLocalStorage('.matching-search_year-inside-result', '.matching-search_month-inside-result');
            syncSelectors('.matching-search_year-inside-result','.matching-search_month-inside-result','.matching-search_year-select', '.matching-search_month-select','.matching-search_year-result', '.matching-search_month-result');
            
        }else if (window.location.pathname.endsWith('Invoice-fueling_invoice.html')) {
            loadYearMonthFromLocalStorage('.invoice-fueling_year-result', '.invoice-fueling_month-result');

        }else if (window.location.pathname.endsWith('Invoice-fueling_pos.html')) {
            loadYearMonthFromLocalStorage('.invoice-fueling-pos_year-result', '.invoice-fueling-pos_month-result');

        }else if (window.location.pathname.endsWith('Invoice-fueling_pos2.html')) {
            loadYearMonthFromLocalStorage('.invoice-fueling-pos2_year-result', '.invoice-fueling-pos2_month-result');
        }
        else if (window.location.pathname.endsWith('Invoice-transport_sap.html')) {
            loadYearMonthFromLocalStorage('.transport-sap_year-result', '.transport-sap_month-result');
        }
        else if (window.location.pathname.endsWith('Invoice-shipping.html')) {
            loadYearMonthFromLocalStorage('.invoice-shipping_year-result', '.invoice-shipping_month-result');
        }
       
    
    }

    function initAddRangeButton() {
        // 使用事件委托绑定点击事件

        $(document).on('click', '.add-range-row_bt', function() {
            loadYearMonthFromLocalStorage('.matching-search_year-result', '.matching-search_month-result','.matching-function_year-result','.matching-function_type-result');
        });
        $(document).on('click', '.add_range_bt', function() {
            loadYearMonthFromLocalStorage('.matching-search_year-result', '.matching-search_month-result','.matching-function_year-result','.matching-function_type-result');
        });
    }

      // 在点击查询按钮时同步更新年份和月份选择器
      function initSyncYearMonthOnSearch() {
        $('.search_bt_function').click(function() {
            var year = $('.matching-search_year-inside-result').val();
            var month = $('.matching-search_month-inside-result').val();
            console.log('Year: ' + year + ', Month: ' + month);  // Debug: 输出捕获的值
            $('.matching-search_year-select').val(year);
            $('.matching-search_month-select').val(month);
            $('.matching-search_year-result').val(year);
            $('.matching-search_month-result').val(month);
            console.log('Set values');  // Debug: 确认设置函数被调用
        });
    }
    
     // Add Single-Range Function
    // 使用事件委托绑定点击事件
    $(document).on('click', '.add-range-row_bt', function() {
        // 从内页选择器获取年份和月份
        var year = $('.matching-search_year-inside-result').val();
        var month = $('.matching-search_month-inside-result').val();
    
        // 确保结果选择器已经在DOM中
        if ($('.matching-search_year-result').length > 0 && $('.matching-search_month-result').length > 0) {
            // 设置到对应的选择器中并禁用更改
            $('.matching-search_year-result').val(year).prop('disabled', true);
            $('.matching-search_month-result').val(month).prop('disabled', true);
        } else {
            console.log("Cannot find selectors in the DOM.");
        }
    });
    
    $(document).on('click', '.add_range_bt', function() {
        // 从内页选择器获取年份和月份
        var year = $('.matching-search_year-inside-result').val();
        var month = $('.matching-search_month-inside-result').val();
    
        // 确保结果选择器已经在DOM中
        if ($('.matching-search_year-result').length > 0 && $('.matching-search_month-result').length > 0) {
            // 设置到对应的选择器中并禁用更改
            $('.matching-search_year-result').val(year).prop('disabled', true);
            $('.matching-search_month-result').val(month).prop('disabled', true);
        } else {
            console.log("Cannot find selectors in the DOM.");
        }
    });
    
    // 初始化所有功能
    initSaveYearMonthButtons();
    initLoadYearMonth();
    initAddRangeButton();
    initSyncYearMonthOnSearch();

    

    //   // 初始化所有功能
    //   initSaveYearMonthButtons();
    //   initLoadYearMonth();
    //   initAddRangeButton();
   
    // // Add Single-Range Function
    // // 使用事件委托绑定点击事件
    // $(document).on('click', '.add_range_bt','.add-range-row_bt', function() {
    //     // 从localStorage获取年份和月份
    //     var year = localStorage.getItem('selectedYear');
    //     var month = localStorage.getItem('selectedMonth');

    //     // 确保下拉选择器已经在DOM中
    //     if ($('.matching-search_year-result').length > 0 && $('.matching-search_month-result').length > 0) {
    //         // 设置到对应的选择器中并禁用更改
    //         $('.matching-search_year-result').val(year).prop('disabled', true);
    //         $('.matching-search_month-result').val(month).prop('disabled', true);
    //     } else {
    //         // 如果没有找到选择器，可以在这里输出一些错误信息或进行其他处理
    //         console.log("Cannot find selectors in the DOM.");
    //     }
    // });

     
  



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
    var unit = $row.find('td').eq(4).text();
    var site = $row.find('td').eq(3).text();
    var taxId = $row.find('td').eq(5).text();
    var category = $row.find('td').eq(7).text();
    var purpose = $row.find('td').eq(8).text();

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



// 清空按钮的点击事件
$('.eraser_bt').click(function() {
    // 清空选择器的值
    $('.year-select').val('');
    $('.month-select').val('');
    $('.invoice-fueling_year-result').val('');
    $('.invoice-fueling_month-result').val('');
    $('.invoice-fueling-pos_year-result').val('');
    $('.invoice-fueling-pos_month-result').val('');
    $('.invoice-fueling-pos2_year-result').val('');
    $('.invoice-fueling-pos2_month-result').val('');
    $('.transport-sap_year-result').val('');
    $('.transport-sap_month-result').val('');
    $('.invoice-shipping_year-result').val('');
    $('.invoice-shipping_month-result').val('');
    $('.matching-search_year-result').val('');
    $('.matching-search_month-result').val('');
    $('.matching-search_year-inside-result').val('');
    $('.matching-search_month-inside-result').val('');
    $('.matching-function_year-result').val('');
    $('.matching-function_type-result').val('');

    // 清空其他选择器的值
    $('.change-status').val('');
    $('.invoice-status').val('');
    $('.error-status').val('');
    $('.bp-input').val('');
    $('.station-name').val('');
    $('.sync-status').val('');
    $('.upload-status').val('');
    $('.methods').val('');
    $('.type').val('');
});


    // 用於更新頁面內容的函數
    function updatePageWithResults(results) {
        // 根據回應的內容更新頁面
        // 這個函數可以用來顯示查詢結果
        console.log('更新頁面', results);
    }

    // Add range popup-單位自動填入數據
$('.unit-select').change(function() { // 当选择单位时
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