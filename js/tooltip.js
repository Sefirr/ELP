$(document).ready(function(){
	$('#facebook').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'facebook.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'right',
	contentAsHTML: true
});
	$('#candycrush').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'candycrush.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'right',
	contentAsHTML: true
});
	$('#spotify').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'spotify.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'right',
	contentAsHTML: true
});
	$('#telegram').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'telegram.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'right',
	contentAsHTML: true
});
	$('#shazam').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'shazam.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'right',
	contentAsHTML: true
});

/*****************************************************/

	$('#clashofclans').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'clashofclans.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'left',
	contentAsHTML: true
});
	$('#twitter').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'twitter.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'left',
	contentAsHTML: true
});
	$('#linterna').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'linterna.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'left',
	contentAsHTML: true
});
	$('#skype').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'skype.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'left',
	contentAsHTML: true
});
});