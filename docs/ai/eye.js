(function() {

	var eyeui = new BotUI('bs_chat');
	var key;

  //初期メッセージ
  eyeui.message.bot({
    content: 'EYEです。'
  }).then(init);


  function init() {
    eyeui.message.bot({
      delay: 1000,
      content: 'どんなことが知りたいですか？'
    }).then(function() {

	return eyeui.action.button({
		delay: 1000,
		action: [
			{text: "避難場所を調べたい", value: "1"},
			{text: "雨雲の様子は？", value: "2"},
			{text: "ハザードマップを見たい", value: "3"},
			{text: "ここどこ？", value: "4"},
			{text: "避難方法を知りたい", value: "5"},
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
			{text: "屋内", value: "1"},
			{text: "屋外", value: "2"},
			{text: "乗り物の中", value: "3"}
		]
	}).then(function(res){

		key = res.value;
		
		if(key == "1"){
		
		hinan_okunai(key);
		
		}else if(key == "2"){

		hinan_okugai(key);
		
		}else if(key == "3"){
		
		hinan_norimono(key);
		
		}
	
	});

  });


    }else if(x == "6"){
		eyeui.message.bot({
	  	delay: 1000,
      	content: "以下から119に発信できます。<br><br>「火事」か「救急」かお答えし、係の指示に従ってください。<br><br><a href='Tel:119' target='_blank'>１１９</a>"
	});
    }

}

function hinan_okunai(y){

		eyeui.message.bot({
	  	delay: 1000,
      	content: "次の中から選んでください。"
    	}).then(function() {

	return eyeui.action.button({
		delay: 1000,
		action: [
			{text: "日常生活中", value: "1"},
			{text: "台所", value: "2"},
			{text: "お風呂・トイレ", value: "3"},
			{text: "寝ている時", value: "4"},
			{text: "マンション", value: "5"},
			{text: "職場・オフィス", value: "6"},
			{text: "スーパー・デパート", value: "7"},
			{text: "映画館・劇場", value: "8"},
			{text: "地下街", value: "9"},
			{text: "学校", value: "10"},
			{text: "エレベーター", value: "11"}
		]
	}).then(function(res){

		key = res.value;

		if(key == "1"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。"
    		}).then(function() {
    		
			eyeui.message.bot({
	  		delay: 1000,
      		content: "机やテーブルの下にもぐり、自分の身を守る。"
    		}).then(function() {
    		
			eyeui.message.bot({
      		delay: 1000,
      		content: "動く時は、スリッパ等を履く。ガラス片等で足を怪我する可能性がある。"
    		}).then(function() {
    		
			eyeui.message.bot({
      		delay: 1000,
      		content: "戸を開けて出入り口を確保する。家の中に閉じ込められる恐れがある。"
    		})

    		}).then(function() {tugi()})
    		
    		})


    		})
		}

		if(key == "2"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。"
    		}).then(function() {
    		
			eyeui.message.bot({
	  		delay: 1000,
      		content: "テーブルの下にもぐり、身の安全を確保する。"
    		}).then(function() {
    		
			eyeui.message.bot({
	  		delay: 1000,
      		content: "慌てて火を消そうとすると、やけどする危険があるので、揺れがおさまるのを待ってから火を消す。"
    		}).then(function() {
    		
			eyeui.message.bot({
	  		delay: 1000,
      		content: "食器棚や冷蔵庫が倒れてくるだけではなく、中身が飛び出してくる事があるので、注意する。"
    		})
    		
    		}).then(function() {tugi()})
    		})
    		})


		}

		if(key == "3"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。"
    		}).then(function() {

			eyeui.message.bot({
	  		delay: 1000,
      		content: "風呂場では、タイルや鏡、トイレでは水洗タンクが落ちてくることがあるので、注意する。"
    		}).then(function() {

			eyeui.message.bot({
	  		delay: 1000,
      		content: "浴槽の中では、風呂のふた等をかぶり、頭を守る。"
    		}).then(function() {
    		
			eyeui.message.bot({
	  		delay: 1000,
      		content: "入浴中は、鏡やガラスの破損による怪我に注意する。"
    		}).then(function() {

			eyeui.message.bot({
	  		delay: 1000,
      		content: "揺れがおさまってから、避難する。"
      		})
    		}).then(function() {tugi()})
    		})
    		})
    		})
    		
		}

		if(key == "4"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。"
    		}).then(function() {

			eyeui.message.bot({
	  		delay: 1000,
      		content: "揺れで目が覚めたら、寝具にもぐりこむか、ベッドの中にうずくまる。"
    		}).then(function() {

			eyeui.message.bot({
	  		delay: 1000,
      		content: "枕元にはスリッパ、懐中電灯、ラジオやスマートフォンを置いておく。"
    		}).then(function() {

			eyeui.message.bot({
	  		delay: 1000,
      		content: "寝室にタンス等を置く場合は、天井と固定しておき、倒れないようにする。"
    		})
    		}).then(function() {tugi()})
    		})
    		})

		}

		if(key == "5"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>机の下にもぐり、揺れがおさまるのを待つ。<br><br>高層階では、揺れの幅が大きくなる。<br><br>非常口の確認をしておく。"
    		})
		}

		if(key == "6"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>窓ガラスが割れることがあるので、窓辺から離れる。<br><br>OA機器の落下に注意する。<br><br>日頃から整理整頓を行い、職場環境を綺麗に心がける。<br><br>避難時はエレベーターを使用しないようにする。"
    		})
		}

		if(key == "7"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>バックや買い物かごなどで頭を保護し、ショーケースなど倒れやすいものから離れる。<br><br>ガラス製品や瀬戸物、その他、陳列棚の商品などの落下・転倒に注意する。<br><br>エレベーターによる避難はしない。"
    		})
		}

		if(key == "8"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>バックなどで頭を保護し、座席の間に身を隠して、揺れが収まるのを待つ。<br><br>天井からの落下物や窓ガラス等に注意しながら、安全な場所に避難する。<br><br>停電しても誘導灯や非常灯がつくので、慌てずに、係員の指示に従う。<br><br>事前に避難口を確認しておく。"
    		})
		}

		if(key == "9"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>停電になっても、非常照明がつくまでむやみに動かないようにする。<br><br>地下街では６０ｍごとに非常口が設置されているため、一つの非常口に殺到せずに地上に落ち着いて脱出する。<br><br>脱出するときは、壁づたいに歩いて避難する。"
    		})
		}

		if(key == "10"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>教室内では、机の下に潜って落下物などから身を守り、慌てて外に飛び出すなど勝手な行動はせずに、教職員の指示に従う。<br><br>廊下、運動場、体育館などでは、中央部に集まってしゃがむ。<br><br>実験室などでは、薬品や火気に注意する。<br><br>通学路が危険なこともあるので、勝手に帰宅しない。"
    		})
		}

		if(key == "11"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>全ての階のボタンを押し、最初に停止した階でおりるのが原則！<br><br>ただし、停止した階で慌てておりるのではなく、階の状況を見極めるのも大切！<br><br>エレベーターに閉じこめられても、焦らず冷静になって「非常用呼び出しボタン」等での連絡を取る。"
    		})
		}

	})


  });

}


function hinan_okugai(y){

		eyeui.message.bot({
	  	delay: 1000,
      	content: "次の中から選んでください。"
    	}).then(function() {

	return eyeui.action.button({
		delay: 1000,
		action: [
			{text: "住宅地", value: "1"},
			{text: "オフィス街・中華街", value: "2"},
			{text: "海岸", value: "3"},
			{text: "川べり", value: "4"},
			{text: "山・丘陵地", value: "5"}
		]
	}).then(function(res){

		key = res.value;

		if(key == "1"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>住宅地の路地にあるブロック塀や石塀は、強い揺れで倒れる危険がある。揺れを感じたら塀から離れる。<br><br>電柱や自動販売機も倒れてくることがあるので、そばから離れる。<br><br>屋根瓦や二階建て以上の住宅のベランダに置かれているエアコンの室外機、ガーデニング用のプランターなどが落下してくることがある。頭の上も注意する。<br><br>強い揺れが起きると、耐震性能の低い住宅が倒壊する場合もある。これにより瓦礫や窓ガラスが道路内に散乱する可能性もあるので、揺れを感じたら周辺の状況に注意する。"
    		})
		}

		if(key == "2"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>何はともあれ、頭上を保護する！<br><br>オフィスビルの窓ガラスが割れて落下すると、時速40～60kmで広範囲に拡散する。<br><br>ビルの外壁や張られているタイル、外壁に取り付けられている看板などが剥がれ落ちることもある。<br><br>街では、オフィス街には少ない店の看板やネオンサインなどの落下・転倒物が加わる。<br><br>鞄などで頭を保護し、できるだけ建物から離れる。"
    		})
		}

		if(key == "3"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br> 一番恐ろしいのは津波。とにかく高い所に避難する！<br><br>津波は繰り返し襲って来て、第一波の後にさらに高い波が来ることもある。いったん波が引いても絶対に戻ってはいけない。<br><br>避難標識が整備されている場合には避難する際の目安になる。<br><br>水浴中の場合は、監視員やライフセーバーがいる海水浴場では指示に従って避難する。<br><br>警報などが出ていないか、正しい情報を入手する。<br><br>→ <a href='http://www.jma.go.jp/jp/tsunami/index.html' target='_blank'>津波の防災情報</a>"
    		})
		}

		if(key == "4"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br> 津波は水を湛えている川を遡る！<br><br>流れに沿って上流側へ避難しても津波は追いかけてくる。<br><br>流れに対して直角方向に素早く避難する。"
    		})
		}

		if(key == "5"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br> 落石に注意し、急傾斜地など危険な場所から遠ざかる！<br><br>登山やハイキングで山にいる時に強い揺れに襲われた場合には、まず落石から身を守る。<br><br>地震で地盤がゆるみ、崩れやすくなっている可能性があるため、崖や急傾斜地など危険な場所には近づかない。"
    		})
		}
	
	}).then(function(){tugi()});

  });

}

function hinan_norimono(y){

		eyeui.message.bot({
	  	delay: 1000,
      	content: "次の中から選んでください。"
    	}).then(function() {

	return eyeui.action.button({
		delay: 1000,
		action: [
			{text: "車の中", value: "1"},
			{text: "鉄道", value: "2"},
			{text: "新幹線", value: "3"},
			{text: "地下鉄", value: "4"},
			{text: "バス", value: "5"}
		]
	}).then(function(res){

		key = res.value;

		if(key == "1"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>揺れを感じたら<br>①急ブレーキは禁物！ハンドルをしっかり握り、前後の車に注意しながら徐々にスピードを落とし、道路の左側に停車する。<br><br>②エンジンを切り、揺れがおさまるまでは車外に出ず、カーラジオやスマートフォンから情報を入手する。<br><br>③避難の必要がある場合は、車のキーはつけたままにし、ドアをロックしないで、窓を閉める。<br><br>④連絡先を見えるところに書き、車検証などの貴重品を持ち、徒歩で避難する。<br><br>車での避難は、緊急自動車などの妨げになる。<br><br>高速道路では、普通の道路を走行中の対処に加え、以下の点にも留意する。<br><br>①高速走行しているのでハザードランプを点灯させ、前後の車に注意を喚起する。<br><br>②高速道路では約１ｋｍごとに非常口を設けているので、徒歩で地上に脱出することができる。"
    		})
		}

		if(key == "2"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>強い揺れを感知すると電車は緊急停車する！<br><br>座席に座っている場合には、低い姿勢をとって頭部を鞄などで保護し、立っている場合には手すりやつり革をしっかり握って転倒しないようにする。<br><br>停車後は、乗務員の指示に従う。"
    		})
		}

		if(key == "3"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>新幹線は早期地震検知警戒システム（ユレダス）が作動して緊急停車する！<br><br>高速走行しているので、座席に座っている場合には、前に飛び出さないように座席の間に体を隠し、立っている場合には手すりをしっかり握って転倒しないようにする。<br><br>停車後は、乗務員の指示に従う。"
    		})
		}

		if(key == "4"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>震度５弱程度の揺れを観測した場合に運転を停止し、線路途中なら安全を確認し、低速で最寄りの駅に向かう！<br><br>座席に座っている場合には、低い姿勢をとって頭部を鞄などで保護し、立っている場合には手すりやつり革をしっかり握って転倒しないようにする。<br><br>停電になっても非常灯が1時間程度は点灯するので、慌てずに行動する。<br><br>地下鉄によっては高圧電線が線路脇に設置されているので、勝手に線路に飛び降りると危険！<br><br>停車後は、乗務員の指示に従う。"
    		})
		}

		if(key == "5"){
			eyeui.message.bot({
	  		delay: 1000,
      		content: "対処方法は以下のとおりです。<br><br>強い揺れを感じた場合に、危険を回避するために急ブレーキが踏まれることがある！<br><br>座席に座っている場合には、低い姿勢をとって頭部を鞄などで保護し、立っている場合には手すりやつり革をしっかり握って転倒しないようにする。<br><br>停車後は、乗務員の指示に従う。"
    		})
		}


	
	}).then(function(){tugi()});

  });

}

function tugi(){

eyeui.message.bot({
  delay: 2000,
  content: '他に知りたいことはありますか？'
}).then(function() {

  return eyeui.action.button({
    delay: 1000,  
    action: [{
      icon: 'circle-thin',
      text: 'はい',
      value: true
    }, {
      icon: 'close',
      text: 'いいえ',
      value: false
    }]
  });
}).then(function(res) {
	res.value ? init() : end();
  
});


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
      delay: 1000,
      content: 'ご利用ありがとうございました！'
    })
  }

})();
