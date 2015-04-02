// ==UserScript==
// @name           mBank Vitamin by Marcin Nowicki
// @namespace      http://prodix.pl
// @description    A skin for mBank by Marcin Nowicki
// @include        https://online.mbank.pl/*
// ==/UserScript==

var hal = function (){
	var css = '@import "mbank.css";';

	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			var node = document.createElement("style");
			//node.type = "text/css";
			node.innerHTML = css;
			heads[0].appendChild(node);
		}
	}
}

window.setTimeout(hal, 0000);
