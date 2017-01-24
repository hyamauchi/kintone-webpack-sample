
/*
 * モバイルAPIを使ったサンプルプログラム
 * Copyright (c) 2016 Cybozu
 *
 * Licensed under the MIT License
 */
(function () {
  "use strict";

  module.exports = function () {
    //ラジオボタンの選択によってフィールドの表示・非表示を切り替える
    var events1 = ['app.record.detail.show',
      'app.record.create.show',
      'app.record.create.change.QType',
      'app.record.edit.change.QType',
      'mobile.app.record.detail.show',
      'mobile.app.record.create.show',
      'mobile.app.record.create.QType',
      'mobile.app.record.edit.change.QType'];

    kintone.events.on(events1, function (event) {
      var record = event.record;
      var QType = record.QType.value;
      if (QType === 'その他') {
        kintone.app.record.setFieldShown('Other', true);
        kintone.mobile.app.record.setFieldShown('Other', true);
      } else {
        kintone.app.record.setFieldShown('Other', false);
        kintone.mobile.app.record.setFieldShown('Other', false);
      }
      return event;
    });
  };

})();
