$(function() {

	var names = ['SASSBASTIAN', 'TAYMOOR', 'RICK', 'SHASHANK', 'NICK', 'JONATHAN'];
	var chosen = names[Math.floor(Math.random() * names.length)];

	$("<h1>FUCK YOU " + chosen + " </h1>").appendTo('#gfy');

	(function titleScroller(text) {
	    document.title = text;
	    console.log(text);
	    setTimeout(function () {
	        titleScroller(text.substr(1) + text.substr(0, 1));
	    }, 500);
	}(" NODE NODE NODE NODE FUCK YOU " + chosen));

});