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
					
    
});