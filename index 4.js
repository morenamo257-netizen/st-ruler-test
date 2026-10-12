jQuery(() => {
    $('body').append('<div id="ruler_test_btn" style="position:fixed;right:14px;bottom:140px;z-index:99999;width:46px;height:46px;border-radius:50%;background:#111;color:#fff;border:1px solid #888;display:flex;align-items:center;justify-content:center;font-size:22px;">📏</div>');
    if (window.toastr) toastr.success('Тест: расширение загрузилось');
});
