(function($){
	$.fn.board = function(e) {
	for(var t=0;e*e>t++;)$("body").append($("<div/>"));for(var o=$("div"),l=0,r=0,a=30,d=0,n=["rgb(255,225,0)","rgb(255,150,0)"],s=0;e>s++;){1&e?++d:d&1,l=0;for(var i=-1;e>i++;)$(o[e*s+i]).css({"background-color":n[d],"left":l,"top":r,"width":a,"height":a,"position":"absolute"}),l+=a,d=d+1&1;r+=a}
	}}(jQuery));