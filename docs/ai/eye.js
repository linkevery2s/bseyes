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
			{text: "避難の仕方が分からない", value: "5"},
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
	});
    }else if(x == "2"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "雨雲レーダーを表示します。"
    }).then(function() {
		setTimeout(function(){ location.href="https://linkevery2s.github.io/bseyes/ame.html#map"; }, 1000);
	});
    }else if(x == "3"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "ここから見てみましょう！<br><br><a href='https://linkevery2s.github.io/bseyes/hazard.html' target='_blank'>ハザードマップ</a>"
	});
    }else if(x == "4"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "GPSを解析し、現在地を表示します。"
    }).then(function() {
		setTimeout(function(){ GPS(); }, 1000);
	});
    }else if(x == "5"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "どこにいますか？"
    	}).then(function() {

	return eyeui.action.button({
		delay: 1000,
		action: [
			{text: "避難場所を調べたい", value: "1"},
			{text: "雨雲の様子は？", value: "2"},
			{text: "ハザードマップを見たい", value: "3"},
			{text: "ここどこ？", value: "4"},
			{text: "避難の仕方が分からない", value: "5"},
			{text: "救急です。", value: "6"}
		]
	}).then(function(res){

		key = res.value;
		discovery(key);
	
	});

  });




    }else if(x == "6"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "以下から119に発信できます。<br><br>「火事」か「救急」かお答えし、係の指示に従ってください。<br><br><a href='Tel:119' target='_blank'>１１９</a>"
	});
    }

}


	function GPS(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     	} else {
			alert("エラーが発生したので、現在地を取得できませんでした。");      
     	}
	}

	function gps_get(position) {

    	ido = position.coords.latitude;
    	keido = position.coords.longitude;

    	location.href ="https://linkevery2s.github.io/bseyes/whmap.html#15/" + ido + "/" + keido;
	}

	function gps_error(error) {
       alert("エラーが発生したので、現在地を取得できませんでした。");
	}


  //プログラムを終了する処理
  function end() {
    eyeui.message.bot({
      content: 'ご利用ありがとうございました！'
    })
  }

})();
