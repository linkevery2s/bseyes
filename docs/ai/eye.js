(function() {

  var eyeui = new BotUI('search-repo');


  //初期メッセージ
  eyeui.message.bot({
    content: '防災アシスタント「EYE」です。'
  }).then(init);


  function init() {
    eyeui.message.bot({
      delay: 1500,  //メッセージの表示タイミングをずらす
      content: 'お呼びでしょうか？'
    }).then(function() {

      //キーワードの入力
  eyeui.message.human({
    delay: 1500,
    content: 'こんにちは、ユーザーです！'
  });
 
  });
  }



  //プログラムを終了する処理
  function end() {
    eyeui.message.bot({
      content: 'ご利用ありがとうございました！'
    })
  }

})();
