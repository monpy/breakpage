/** Type Here **/
// object.watch
if (!Object.prototype.watch) {
	console.log("123456");
	Object.defineProperty(Object.prototype, "watch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop, handler) {
			var
			  oldval = this[prop]
			, newval = oldval
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
				return newval = handler.call(this, prop, oldval, val);
			}
			;
			
			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}
 
// object.unwatch
if (!Object.prototype.unwatch) {
	Object.defineProperty(Object.prototype, "unwatch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop) {
			var val = this[prop];
			delete this[prop]; // remove accessors
			this[prop] = val;
		}
	});
}

$(function(){

	console.log("pjax");

	$.pjax({ 
		area: '#changed,#container',
		link: 'a'
	});
	
	$.breakpage({
		debug:true,
		root:"/~mori/breakpage/Demo",
		functions:[
			{
				from:"/index.html,/",
				to:"/page2.html",
				do:function(){
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
		]
	});
	function call(){
		console.log(1234567890);
	}
});