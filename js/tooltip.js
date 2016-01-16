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
	interactive: true, 
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
	interactive: true, 
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
	interactive: true, 
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
	interactive: true, 
	position: 'right',
	contentAsHTML: true
});
	$('#vine').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'vine.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	interactive: true, 
	position: 'right',
	contentAsHTML: true
});
	$('#snapchat').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'snapchat.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	interactive: true, 
	position: 'right',
	contentAsHTML: true
});
	$('#instagram').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'instagram.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	interactive: true, 
	position: 'right',
	contentAsHTML: true
});
	$('#whatsapp').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'whatsapp.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	interactive: true, 
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
	interactive: true, 
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
	interactive: true, 
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
	interactive: true, 
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
	interactive: true,
	position: 'left',
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
	position: 'left',
	contentAsHTML: true
});
	$('#amazon').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'amazon.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'left',
	contentAsHTML: true
});
	$('#dropbox').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'dropbox.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'left',
	contentAsHTML: true
});
	$('#google').tooltipster({
	trigger:'click',
    functionInit: function(origin, content) { 
		$.ajax({
			type: 'POST',
			url: 'google.php',
			success: function(data) {
				origin.tooltipster('content', data);
			}
		});
    },
	position: 'left',
	contentAsHTML: true
});
});