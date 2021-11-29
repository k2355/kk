jQuery(function($){
	if ($('.sidebar-left').length) {
		if($('.sidebar').length){
			$('.theiaStickySidebar-left').theiaStickySidebar({"containerSelector":".main","additionalMarginTop":"0"});
		}else{
	        $('.theiaStickySidebar-left').theiaStickySidebar({"containerSelector":".main","additionalMarginTop":"40px"});
	    }
    }

    if($(".search-advanced-top").length){
		var a = $(".search-advanced-top .wb-dropdown"),
		e = $(a.attr("data-target"));
		$(".search-advanced-top .wb-dropdown-value").on("click",
		function() {
			a.toggleClass("active-dropdown")
		}),
		a.find(".wbs-item").on("click",
		function() {
			var t = $(this).text();
			e.val($(this).data("val")),
			$(".wb-dropdown-value span").html(t),
			a.removeClass("active-dropdown")
		}),
		($(".search-advanced-top .wb-dropdown"),
		function() {
			$("#s").select()
		}),
		$(".header .search-advanced-top .form-control").on({
			focus: function() {
				$("#searchform").addClass("active")
			},
			blur: function() {
				$("#searchform").removeClass("active")
			}
		}),
		$(document).on("click",
		function(t) {
			$(t.target).closest(".wb-dropdown").length || $(".wb-dropdown").hasClass("active-dropdown") && $(".wb-dropdown").removeClass("active-dropdown")
		})
	}
});