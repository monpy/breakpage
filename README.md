# Break Page JS

このライブラリはpjaxとか果てしない流れの ** 流れを捉える ** ライブラリ

つまるところ、頁遷移をキャッチして、関数を動かそうということ。

pjax の pushState と popState に反応して動きます。

どこから:from どこへ:to を察知して処理:do します。

#Installation
	<script type="text/javascript" src="./jsvascripts/vendor/jquery.1.8.3"></script>
	<script type="text/javascript" src="./javascripts/vendor/jquery.breakpage.js"></script>

#動作環境
pushStateが使えるブラウザ。

#Usage
###debug : boolean (default : false)
コンソールにURLの遷移状況が表示されます。もしURLがマッチしないときはチェック。

###root : String (default : location.origin)
もし、indexがドメイン直下にないときとか、書くのが面倒な人向け

基本はドメインまでは省いてます。(http://xxx.com まで省いてあると思うよ。。。)

###functions : Array
ここに遷移先と関数を記述をしてください。

* ####from,to
	
	* 遷移前と遷移後のアドレスパターン。正規表現、カンマで区切って複数指定もできます。

###SAMPLE
	$.breakpage({
		debug:true, //デバックコンソール、URLの流れが表示されます
		root:"hoge/exmaple" //もしドメイン直下がindexじゃないとき
		functions:[
			{
				from:"/index.html",	//来たとこ
				to:"/page2.html",//行くとこ
				do:function(){//行う関数
					console.log("pjax");
				}
			},{
				from:/[0-9]/, //正規表現でもおk
				to:"/index.html,page2.html",
				do:function(){
					console.log("pjax");
				}
			}
			,….
		]
	});
#LICENSE
License
(The MIT License)

Copyright (c) 2013 monpy. <mori@scriptorium.jp>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
#諸注意
現在無職の僕に仕事ください。

mail : <mori@scriptorium.jp>