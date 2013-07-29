/** Type Here **/

$(window).on('statechange', function (ev) {
    // popState なイベントハンドラ
    
});

/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
 
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
	$.pjax({ 
		area: '#changed,#container',
		link: 'a'
	});
	
	$.breakpage({
		debug:true,
		functions:[
			{
				from:"/index.html",
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
});