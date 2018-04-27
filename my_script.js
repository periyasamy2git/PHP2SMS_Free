$("#submit").click( function() {
	$("#ack").html('Message Sending...');
	 $.post( $("#myForm").attr("action"),
	         $("#myForm :input").serializeArray(),
			 function(info) {

			   $("#ack").empty();
			   $("#ack").html(info);
			 });

	$("#myForm").submit( function() {
	   return false;
	});
});
