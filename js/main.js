/*  ---------------------------------------------------
    Template Name: Violet 
    Description: Violet ecommerce Html Template
    Author: Colorlib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
		    Product filter
	    --------------------*/
        if ($('#product-list').length > 0) {
            var containerEl = document.querySelector('#product-list');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        appendTo: '.header-section',
        allowParentLinks: true,
        closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>'
    });

    /*------------------
		Search model
	--------------------*/
	$('.search-trigger').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});

  
    

    /*------------------
        Magnific Popup
    --------------------*/
    $('.pop-up').magnificPopup({
        type: 'image'
    });

    /*-------------------
		Sort Select
	--------------------- */
    $('.sort').niceSelect();

    /*-------------------
		Cart Select
	--------------------- */
    $('.cart-select').niceSelect();

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*-------------------
		Radio Btn
	--------------------- */
    $(".shipping-info .cs-item label").on('click', function () {
        $(".shipping-info .cs-item label").removeClass('active');
        $(this).addClass('active');
    });

    $(".checkout-form .diff-addr label").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".payment-method ul li label").on('click', function () {
        $(this).toggleClass('active');
    });

})(jQuery);



// product details



// Array to store cart items
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update cart UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let total = 0;

    // Clear existing cart items
    cartItemsContainer.innerHTML = '';

    // Display each item in the cart
    cart.forEach((item, index) => {
        total += parseFloat(item.price.replace('Rs.', '').trim());

        const cartRow = `
            <tr>
                <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"></td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
                </td>
            </tr>
        `;
        cartItemsContainer.innerHTML += cartRow;
    });

    // Update total price
    cartTotalElement.textContent = `Total: Rs. ${total}`;
}

// Function to update cart count
function updateCartCount() {
const cartCountElement = document.getElementById('cart-count');
const cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage
cartCountElement.textContent = cart.length; // Update count
}

// Load cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);


// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

// Function to add an item to the cart
function addToCart(name, price, image) {
    const product = { name, price, image };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
    alert(`${name} added to cart.`);
}

// Load the cart on page load
document.addEventListener('DOMContentLoaded', updateCartUI);






        function changeImage(thumbnail) {
            const mainImage = document.getElementById('mainImage');
            mainImage.src = thumbnail.src;
        }




        // product details js 


        $(document).ready(function () {
            $(".slideshow-thumbnails").hover(function () {
              changeSlide($(this));
            });
        
            $(document).mousemove(function (e) {
              if (window.innerWidth > 768) { // Disable zoom for screens smaller than 768px
                var x = e.clientX;
                var y = e.clientY;
        
                var imgx1 = $(".slideshow-items.active").offset().left;
                var imgx2 = $(".slideshow-items.active").outerWidth() + imgx1;
                var imgy1 = $(".slideshow-items.active").offset().top;
                var imgy2 = $(".slideshow-items.active").outerHeight() + imgy1;
        
                if (x > imgx1 && x < imgx2 && y > imgy1 && y < imgy2) {
                  $("#lens").show();
                  $("#result").show();
                  imageZoom($(".slideshow-items.active"), $("#result"), $("#lens"));
                } else {
                  $("#lens").hide();
                  $("#result").hide();
                }
              } else {
                $("#lens").hide();
                $("#result").hide();
              }
            });
          });
        
          function imageZoom(img, result, lens) {
            result.width(img.innerWidth());
            result.height(img.innerHeight());
            lens.width(img.innerWidth() / 2);
            lens.height(img.innerHeight() / 2);
        
            result.offset({
              top: img.offset().top,
              left: img.offset().left + img.outerWidth() + 10,
            });
        
            var cx = img.innerWidth() / lens.innerWidth();
            var cy = img.innerHeight() / lens.innerHeight();
        
            result.css("backgroundImage", "url(" + img.attr("src") + ")");
            result.css(
              "backgroundSize",
              img.width() * cx + "px " + img.height() * cy + "px"
            );
        
            lens.mousemove(function (e) {
              moveLens(e);
            });
            img.mousemove(function (e) {
              moveLens(e);
            });
            lens.on("touchmove", function () {
              moveLens();
            });
            img.on("touchmove", function () {
              moveLens();
            });
        
            function moveLens(e) {
              var x = e.clientX - lens.outerWidth() / 2;
              var y = e.clientY - lens.outerHeight() / 2;
              if (x > img.outerWidth() + img.offset().left - lens.outerWidth()) {
                x = img.outerWidth() + img.offset().left - lens.outerWidth();
              }
              if (x < img.offset().left) {
                x = img.offset().left;
              }
              if (y > img.outerHeight() + img.offset().top - lens.outerHeight()) {
                y = img.outerHeight() + img.offset().top - lens.outerHeight();
              }
              if (y < img.offset().top) {
                y = img.offset().top;
              }
              lens.offset({ top: y, left: x });
              result.css(
                "backgroundPosition",
                "-" +
                  (x - img.offset().left) * cx +
                  "px -" +
                  (y - img.offset().top) * cy +
                  "px"
              );
            }
          }
        
          function changeSlide(elm) {
            $(".slideshow-items").removeClass("active");
            $(".slideshow-items").eq(elm.index()).addClass("active");
            $(".slideshow-thumbnails").removeClass("active");
            $(".slideshow-thumbnails").eq(elm.index()).addClass("active");
          }