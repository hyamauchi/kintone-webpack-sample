/*
 * モバイルAPIを使ったサンプルプログラム
 * Copyright (c) 2016 Cybozu
 *
 * Licensed under the MIT License
 */
(function () {
  "use strict";

  var loadFiles = function (url, type) {
    var head = document.getElementsByTagName('head')[0];
    switch (type) {
      case 'js':
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = url;
        head.appendChild(script);
        break;
      case 'css':
        var link = document.createElement('link');
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        head.appendChild(link);
        break;
    }
  };
  module.exports.loadFiles = loadFiles;

  module.exports.events3Handler = function () {
    //SweetAlertのライブラリを読み込む
    var events3 = ['app.record.create.show',
      'app.record.edit.show',
      'mobile.app.record.create.show',
      'mobile.app.record.edit.show'];

    kintone.events.on(events3, function (event) {
      loadFiles('https://js.cybozu.com/sweetalert/v1.1.3/sweetalert.min.js', 'js');
      loadFiles('https://js.cybozu.com/sweetalert/v1.1.3/sweetalert.css', 'css');
    });
  };

  module.exports.events4Handler = function () {
    //保存実行前にアラートを表示する
    var events4 = ['app.record.create.submit',
      'app.record.edit.submit',
      'mobile.app.record.create.submit',
      'mobile.app.record.edit.submit'];

    kintone.events.on(events4, function (event) {
      return new kintone.Promise(function (resolve, reject) {
        swal({
          title: 'この内容で保存してもいいですか？',
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          closeOnConfirm: false,
          closeOnCancel: true
        },
          function (isConfirm) {
            if (isConfirm) {
              resolve(event);
            } else {
              reject(event);
            }
          });
      });
    });
  };

})();
