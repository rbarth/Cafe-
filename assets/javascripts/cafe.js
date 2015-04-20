$(document).ready(function(){
    
   					
	$(".map-search").submit(function(e) {
		e.preventDefault();
		var baseURL = "https://www.google.com/maps/embed/v1/directions?";
		var	$form = $(e.target);
		var params = $.param({
			key: "AIzaSyCUx0-58dRlBsWC7Llk6idVPtkIRVRuq2A",
			origin: $form.find("[name=saddr]").val(),
			destination: $form.find("[name=daddr]").val()
		});
		$("#map-canvas").attr("src", baseURL + params);
	});
	
	$(".potato-detail").click(function(e)
	{
		e.preventDefault();
		$("#sidesTab").tab('show');
	});
	
	
	$(function ()
	{
  		$('[data-toggle="tooltip"]').tooltip();
	});
	
	$(function ()
	{
  		$('[data-toggle="popover"]').popover();
	});
	
	if ($("body.menus").length > 0 && window.location.hash.length > 0) {
		$("[href='" + window.location.hash + "']").tab("show");
	}
	
	$(".slow-scroll").on("click", function (e) {
		e.preventDefault();
	    var divId = $(e.target).attr("href");
	    
		$("body").animate( {scrollTop: $(divId).offset().top}, 500, function() {
			window.location.hash = divId
		});
	});
	
	$(function() {

    	function abso() {
        $('#titleImg').css({
            // position: 'absolute',
            width: $(window).width(),
            height: $(window).height()
        	});
    	}

    	$(window).resize(function() {
        abso();         
    	});

    	abso();

	});
    
});


