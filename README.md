# 現在開発中なんだが
今、正規表現判定を模索；；

# Break Page JS


このライブラリはpjaxとか果てしない流れの ** 流れを捉える ** ライブラリ

つまるところ、頁遷移をキャッチして、関数を動かそうということ。

pjax の pushState と popState に反応して動きます。

どこから:from どこへ:to を察知して処理:do します。

#Installation
	<script type="text/javascript" src="./jsvascripts/vendor/jquery.1.8.3"></script>
	<script type="text/javascript" src="./javascripts/vendor/jquery.breakpage.js"></script>

#動作環境
----
pushStateが使えるブラウザを考えております。

#Usage
	$.breakpage({
		debug:true, //デバックコンソール、URLの流れが表示されます
		functions:[
			{
				from:"/index.html",	//来たとこ
				to:"/page2.html",//行くとこ
				do:function(){//行う関数
					console.log("DO!!!");
					$("body").css({background:"gray"});
				}
			},{
				from:"/page2.html",
				to:"/index.html",
				do:function(){
					console.log("NO!!!");	
					$("body").css({background:"white"});
				}
			}
			,….
		]
	});
	
#諸注意
現在無職の僕に仕事ください。

mail : mroi@scriptorium.jp