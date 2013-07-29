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
		
		function isSameURL(){
			return (URL === previousURL)? true : false ;
		}
		
		function checkFrom(from){
			return (previousURL.match(from) !== null)?true:false;
		}
		
		function checkTo(to){
			return (URL.match(to) !== null)?true:false;
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
			
			root = (setting.root === "") ? document.location.origin : root.length;
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