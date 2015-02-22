$(function() {

	var names = ['SASSBASTIAN', 'TAYMOOR', 'RICK', 'SHASHANK', 'NICK', 'JONATHAN'];
	var chosen = names[Math.floor(Math.random() * names.length)];
	var jib = Math.floor(Math.random() * 100);

	var request = '<audio src="drdss.mp3" autoplay loop></audio>';

	for (i = 0; i < 101; i++) { 
		$('.container').append('<div id="div'+ i +'" />');
	}

	for (z = 101; z < 201; z++) {
		for (i = 0; i < 101; i++) {
			$('#div' + i + '').append('<div id="div'+ z +'" />');
		}
	}

	$('#div' + jib + '').append(request); 

	$("<h1>FUCK YOU " + chosen + " </h1>").appendTo('#gfy');

	(function titleScroller(text) {
	    document.title = text;
	    setTimeout(function () {
	        titleScroller(text.substr(1) + text.substr(0, 1));
	    }, 500);
	}(" NODE NODE NODE FUCK YOU " + chosen));

});