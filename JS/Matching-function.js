$(document).ready(function(){
    // 加载侧边栏内容
    $('#header_sidebar').load('../header_sidebar.html');

    updateSerialNumbers();

    
    function updateSerialNumbers() {
        $('tbody tr').each(function(index) {
            $(this).find('td:eq(0)').text(index + 1); // 设置序号为当前行的索引 + 1
        });
    }


    
})


