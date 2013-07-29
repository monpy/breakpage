/*!
 * jQuery BreakPage 0.1.0
 *
 * @dependency jQuery 1.8.3+
 * @author monpy(mori jun).
 * @link https://github.com/monpy/breakpage
 * @license MIT License
 */
(function($) {
	$.breakpage = function( options ){
		//pushstate extend
 		(function(original) {
			history.pushState = function(state) {
	    	    original.apply(this, arguments);
	    	    change();
	    	    //return original.apply(this, arguments);
			};
		})(history.pushState);	
		
		function initOnPopStatefunction(){
			window.onpopstate = function(){
				change();
			}	
		}
		
		function change(){
			setPreviousURL();
			setURL();
			if(!isSameURL()){
				tryBreakPage();
				if(debug)console.log(previousURL +" ->->-> "+ URL);	
			}
		}
		
		function tryBreakPage(){
			if(isSameURL()){
				return;
			}
			functions.forEach(function(element, index){
				if(checkFrom(element.from) && checkTo(element.to)){
					element.do();
				}
			});
		}
		
		function URLMatch(url,target){
			if($.type(target) === 'regexp'){
				return (url.matcht(target) !== null)?true:false;
			}
			var searchArr = target.replace(/\s+/g, "").split(",");
			for(var i=0;i < searchArr.length;i++){
				console.log(searchArr[i]);
				if(url === searchArr[i]) return true;
			}
			return false;
		}
		
		function isSameURL(){
			return (URL === previousURL)? true : false ;
		}
		
		function checkFrom(from){
			return URLMatch(previousURL,from);
		}
		
		function checkTo(to){
			return URLMatch(URL,to);
		}
		
		function setPreviousURL(){
			previousURL = URL;
		}
		
		function setURL(){
			URL = document.URL.slice(root_length);
		}
		
		//vars
		var URL,previousURL,root,root_length,functions,debug;
		
		//funcitons get
		var defaults = {
			'root' : "",
			'degug' : false,
   			'functions' : ""
   		};
   		var setting = $.extend( defaults, options );
   		
		//var functions = options.functions;
		
		console.log(setting);
		
		
		function init(){
			//can use pushState
			if(!'pushState' in history){ return; }
			
			root = (setting.root === "") ? document.location.origin :  document.location.origin+setting.root;
			root_length = root.length;
			functions = setting.functions;
			debug = setting.debug;
			
			initOnPopStatefunction();
			
			setURL();
			setPreviousURL();
		}
		//initalize
		init();
 	}
})(jQuery);