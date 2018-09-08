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

	return eyeui.action.button({
		delay: 1000,
		action: [
			{text: "避難場所を調べたい", value: "1"},
			{text: "雨雲の様子は？", value: "2"},
			{text: "ハザードマップを見たい", value: "3"},
			{text: "ここどこ？", value: "4"},
			{text: "避難したい", value: "5"},
			{text: "救急です。", value: "6"},
			{text: "救助を求めたい", value: "7"}
		]
	}).then(function(res){

		delay: 1000;
		content: 'お調べしました。'

	
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
