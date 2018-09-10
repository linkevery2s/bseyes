(function() {

	var eyeui = new BotUI('bs_chat');
	var key;

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
			{text: "救急です。", value: "6"}
		]
	}).then(function(res){

		key = res.value;
		discovery(key);
	
	});

  });


  }

function discovery(x){

	if(x == "1"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "ここから調べられます。<br><br><a href='https://linkevery2s.github.io/bseyes/hinan.html' target='_blank'>避難マップ</a>"
    })
    }else if(x == "2"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "雨雲レーダーを表示します。<br><br><a href='https://linkevery2s.github.io/bseyes/ame.html#map' target='_blank'>気象情報</a>"
    }).then(function() {

alert("am");

});
    
    }else if(x == "3"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "ここから調べられます。<br><br><a href='https://linkevery2s.github.io/bseyes/hazard.html' target='_blank'>ハザードマップ</a>"
    })
    }else if(x == "4"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "ここはどこ"
    })
    }else if(x == "5"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "避難したい"
    })
    }else if(x == "6"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "119に発信します。<br><br><a href = 'tel:119'>119</a>"
    })
    }

}

  //プログラムを終了する処理
  function end() {
    eyeui.message.bot({
      content: 'ご利用ありがとうございました！'
    })
  }

})();
