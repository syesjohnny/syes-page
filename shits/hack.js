(function() {
    'use strict';
    let currentUrl = window.location.href;

    // 檢查URL是否為指定網址或有參數
    if (!currentUrl.startsWith('https://s46.mingdao.edu.tw/ReadCert/Web/rcIntro.php') || 
        (currentUrl === 'https://s46.mingdao.edu.tw/ReadCert/Web/rcIntro.php' && !currentUrl.includes('?') && !currentUrl.includes('&'))) {
        alert('請在Keep讀ing中使用');
    } else {
        let encodedUrl = encodeURIComponent(currentUrl);
        let requestUrl = `https://script.google.com/macros/s/AKfycbwbwzBt0kWjGR04Sqr_Cl2lh2dK2oXfsraHUBly7m0yfKtmdEGfqVzOi5VHZPQ_lp8b_A/exec?gid=0&test=${encodedUrl}`;
        
        fetch(requestUrl)
            .then(a => {
                window.open("http://gg.gg/1c1hww", "_blank");
            })
            .catch(a => {
                console.error("Error:", a);
            });
    }
})();
