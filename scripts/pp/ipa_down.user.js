// @homepageURL  https://github.com/lonjaju/tampermonkey_scripts/blob/master/scripts/pp/pp_ipa.md
// @supportURL   https://github.com/lonjaju/tampermonkey_scripts/issues
// @downloadURL  https://github.com/lonjaju/tampermonkey_scripts/raw/master/scripts/pp/ipa_down.user.js
// @updateURL    https://github.com/lonjaju/tampermonkey_scripts/raw/master/scripts/pp/ipa_down.user.js

// ==UserScript==
// @name         pp_ipa_download_url
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动获取pp助手 下载详情页 ipa包下载链接[不需安装PP助手电脑版]
// @author       Long
// @match        https://www.25pp.com/ios/detail_*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let $a = $('.btn-install-x').first();
    if (!$a) {
        console.log("error:  not find needed dom");
        alert("fail: 没有解析到下载按钮");
        return;
    }

    let raw_down_url = $a.attr('appdownurl');
    //base64 解码
    let decoded_down_url = window.atob(raw_down_url);
    if (!decoded_down_url) {
        alert('fail: 没有获取到正确的ipa下载地址');
        return;
    }
    /*let r = confirm('是否下载ipa包? ' + decoded_down_url);
    if (r) {
        let win = window.open(decoded_down_url, '_blank');
        win.focus();
    }*/
    $a.after(`<a class="btn-install-x" href="${decoded_down_url}" title="直接下载">下载ipa</a>`);
})();