$(function(){

	//PLACEHOLDER POLYFILL
		// function placeholderPolyfill() {
		//   this.classList[this.value ? 'remove' : 'add']('placeholder-shown');
		// }

		// $('[placeholder]').forEach(el => {
		//   el.addEventListener('change', placeholderPolyfill);
		//   el.addEventListener('keyup', placeholderPolyfill);
		// });

	$('.o-input--select').selectToAutocomplete();

	$('.o-input--select').focus(function(e){
		$(e.currentTarget).autocomplete('search', $(this).val());
	});

});

const dataObject = {
	password: '',
	loginError: '',
	loginUserError: '',
	passwordVis: false, 
	regStep: 1,
	differentShippingAddress: false,
	differentBillingAddress: false,
	enterEmailOnAuctionListPage: true,
	confirmEmailOnAuctionListPage: false,
};

const controller = {
	loginError: function(e){
		dataObject.loginError = 'Invalid Password';
		dataObject.loginUserError = 'Invalid Username';
	},

	togglePasswordVis: function(e){
		dataObject.passwordVis = !dataObject.passwordVis;
		$('.js--password').toggleClass('s-visible');
	},

	goToStep: function(e){
		dataObject.regStep = $(e.currentTarget).data('targetstep');
		focusFirstInput($('.js--tab.s-active'));
	},

	toggleDifferentShippingAddress: function(e){
		dataObject.differentShippingAddress = !dataObject.differentShippingAddress;
		if(dataObject.differentShippingAddress) focusFirstInput($('.js--shipping-address-inputs'));
	},

	toggleDifferentBillingAddress: function(e){
		dataObject.differentBillingAddress = !dataObject.differentBillingAddress;
		if(dataObject.differentBillingAddress) focusFirstInput($('.js--billing-address-inputs'));
	},

	gotoAuctionList: function(e){
		window.location = "/auctionlist.html"
	},

	hideEmail: function(e){
		dataObject.enterEmailOnAuctionListPage = false;
		dataObject.confirmEmailOnAuctionListPage = false;
	},

	setEmail: function(e){
		dataObject.enterEmailOnAuctionListPage = false;
		dataObject.confirmEmailOnAuctionListPage = true;
	},
};

const focusFirstInput = function(container){
	container.find('input').first().focus();
}


rivets.bind($('.js--data-context'),{
	dataObject: dataObject,
	controller: controller
});





