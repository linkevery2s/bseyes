(function() {

  var eyeui = new BotUI('search-repo');


  //初期メッセージ
  eyeui.message.bot({
    content: '防災アシスタント「EYE」です。'
  }).then(init);


  function init() {
    eyeui.message.bot({
      delay: 1000,
      content: 'お呼びでしょうか？'
    }).then(function() {

	eyeui.action.button({
		delay: 1000,
		action: [
			{text: "避難場所を調べたい", value: true},
			{text: "雨雲の様子は？", value: false},
			{text: "ハザードマップを見たい", value: false},
			{text: "ここどこ？", value: false},
			{text: "避難したい", value: false},
			{text: "救急です。", value: false},
			{text: "救助を求めたい", value: false}
		]
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
