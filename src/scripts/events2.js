
/*
 * モバイルAPIを使ったサンプルプログラム
 * Copyright (c) 2016 Cybozu
 *
 * Licensed under the MIT License
 */
(function () {
  "use strict";

  module.exports = function () {
    //ドロップダウンの選択でテーブル行の追加&データ入力をする
    var events2 = ['app.record.create.change.CType',
      'app.record.edit.change.CType',
      'mobile.app.record.create.change.CType',
      'mobile.app.record.edit.change.CType'];

    kintone.events.on(events2, function (event) {
      var record = event.record;
      var CType = record.CType.value;
      record.Table.value.push({
        value: {
          'Date': {
            type: 'DATETIME',
            value: ""
          },
          'CType2': {
            type: 'DROP_DOWN',
            value: CType
          },
          'Content': {
            type: 'MULTI_LINE_TEXT',
            value: ""
          },
          'File': {
            type: 'FILE',
            value: ""
          }
        }
      });
      return event;
    });
  };

})();
