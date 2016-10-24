$(function() {
	$(".item-content").equalHeights();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// карусель
	var owl = $(".slider")
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		dots: false,
		navText: ""
	});
		$(".next").click(function(){
			owl.trigger('next.owl.carousel');
		})
		$(".prev").click(function(){
			owl.trigger('prev.owl.carousel');
		});

});
