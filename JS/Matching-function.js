$(document).ready(function(){
    // 加载侧边栏内容
    $('#header_sidebar').load('../header_sidebar.html');

    updateSerialNumbers();

    
    function updateSerialNumbers() {
        $('tbody tr').each(function(index) {
            $(this).find('td:eq(0)').text(index + 1); // 设置序号为当前行的索引 + 1
        });
    }

    // 配號結果隨機顯示
    $('.confirm_matching-insidecheck_bt').click(function() {
        // 這裡需要添加你的業務邏輯來判斷應該顯示哪個模態框
        // 以下是一個簡單的例子，隨機選擇一個結果
        var result = Math.floor(Math.random() * 4); // 生成一個 0 到 3 的隨機數

        switch(result) {
            case 0:
                $('#matching-result-success_popup').modal('show');
                break;
            case 1:
                $('#matching-result-alert_popup').modal('show');
                break;
            case 2:
                $('#matching-result-fail_popup').modal('show');
                break;
            case 3:
                $('#matching-result-done_popup').modal('show');
                break;
        }
    });

    // 為所有模態框中的確認按鈕添加事件處理器，關閉模態框
    $('.confirm_matching_bt').click(function() {
        $('.modal').modal('hide');
    });

    
})


