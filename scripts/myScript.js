$( document ).ready(function() {
    console.log( "ready!" );
    /*$('#getProductsBtn').click(function(){
        $.ajax({
            type: 'GET',
            url: "https://www.rugsafrica.com/wp-json/wc/v2/products?consumer_key=ck_654be29c9e2046f40d5579178e7c656947db9b55&consumer_secret=cs_4a2835d4a5efdbe6d32e234989fef9843c111b20",
            dataType: 'json',
            success: function(data){
                console.log(data);
            }
        })
    });
    $("#myCart").PayPalCart({business: 'mugikhan@gmail.com',
        notifyURL: '',
        virtual: false,
        quantityupdate: true,
        currency: 'USD',
        currencySign: '$',
        minicartid: 'minicart',
        persitdays: -1,
    });

    $(".addToCartBtn").on('click', function(){
        $card = $(".addToCartBtn").parent();
        var desc = $card.find("h4").text();
        var priceText = $card.find(".card-text-sale").text();
        var parts = priceText.split("R");
        var price = parseInt(parts[1]);
        console.log(price);
        $("#myCart").PayPalCart('add','item1', desc, 1, price, 0);
    });*/

    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			/*titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" + " target="_blank">image source</a>';
			}*/
		},
		gallery: {
			enabled: false
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});