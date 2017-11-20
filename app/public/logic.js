    // Capture the form inputs 
    $("#submit").on("click", function(e){
      e.preventDefault();

    	// Form validation
    	function validateForm() {
		  let isValid = true;
		  $('.validator').each(function() {
		    if ( $(this).val() === '' )
		        isValid = false;
		  });

		  $('.chosen-select').each(function() {

		  	if( $(this).val() === "")
		  		isValid = false
		  })
		  return isValid;
		}

		// If all required fields are filled
		if (validateForm() == true)
		{
			// Create an object for the user's data
	    	let userData = {
	    		name: $("#name").val(),
	    		photoURL: $("#photoURL").val(),
	    		scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
	    	}


	    	// Grab the URL of the website
	    	let currentURL = window.location.origin;

	    	// AJAX post the data to the friends API. 
	    	$.post(currentURL + "/api/friends", userData, function(data){

	    		// Grab the result from the AJAX post so that the best match's name and photo are displayed.
	    		$("#matchName").text(data.name);
	    		$('#matchImg').attr("src", data.photo);

		    	// Show the modal with the best match 
		    	$("#resultsModal").modal('toggle');

	    	});
		}
		else
		{
			alert("Please complete the form before submitting");
		}
    	
  return false;
});
