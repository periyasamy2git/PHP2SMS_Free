$("#submit").click( function() {
	$("#ack").html('MOBGYAN LOADING...');
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
