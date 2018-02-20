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
	$(".modal-content").click(function(e) {
		e.stopPropagation();
	});

	// Close when close button is clicked
	$('.modal-close').click(function() {
		$('.modal-container').fadeOut();
	});
}


$(document).ready(function() {
	// MODALS
	popupAbout = $('#modal-container-about');
	popupPortfolio = $('#modal-container-portfolio');
	popupContact = $('#modal-container-contact');
	clickmeAbout = $('#nav-anchor-about');
	clickmePortfolio = $('#nav-anchor-portfolio');
	clickmeContact = $('#nav-anchor-contact');

	showPopup(popupAbout, clickmeAbout);
	showPopup(popupPortfolio, clickmePortfolio);
	showPopup(popupContact, clickmeContact);

	closePopup(popupAbout);
	closePopup(popupPortfolio);
	closePopup(popupContact);

});