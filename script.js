var popup, clickme;
function showPopup(popup, clickme) {
	vh = $(window).height();
	vw = $(window).width();
	bw = popup.width();
	bh = popup.height();
	clickme.click(function(e) {
		e.preventDefault();
		popup.fadeOut();
		popup.css('left', vw/2 - bw/2);
		popup.css('top', vh/2 - bh/2);
		popup.fadeIn();
	});
}

var popup;
function closePopup(popup) {
	// Close when click on outside of popup
	$(".modal-container").click(function() {
		popup.fadeOut();
	});

	// Prevent clicks in modal-content to close popup
	$(".modal-box").click(function(e) {
		e.stopPropagation();
	});

	// Close when close button is clicked
	$('.modal-close').click(function() {
		$('.modal-container').fadeOut();
	});
}

var moreInfoDiv;
function learnMore(moreInfoDiv) {
	$(".more-info-button"+moreInfoDiv).click(function() {
		var infoDiv = $('.portfolio-more-info' + moreInfoDiv);
		if (infoDiv.css('display') == 'none') {
			infoDiv.fadeIn();
		} else {
			infoDiv.css('display', 'none');
		}
	});
}


$(document).ready(function() {
	// MODALS
	var modals = [$('#modal-container-about'), $('#modal-container-portfolio'), $('#modal-container-contact')];
	var clickmeModals = [$('#nav-anchor-about'), $('#nav-anchor-portfolio'), $('#nav-anchor-contact')];

	// MORE INFO DIVS (strings)
	var moreInfoDivs = ['#portfolio-website-more', '#trashit-more', '#handroid-more', '#oamigo-more', '#group-manager-bot-more', '#retro-slides-more'];

	for (i = 0; i < modals.length; i++) {
		showPopup(modals[i], clickmeModals[i]);
		closePopup(modals[i]);
	}

	if ($('.portfolio-main').css("display") == "block") {
		for (i = 0; i < moreInfoDivs.length; i++) {
			learnMore(moreInfoDivs[i]);
		}
	}

});