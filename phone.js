
$(document).ready(function() { // do this when the document is loaded
  $("#contentDialer").show(); // show the element with ID "element"
	$("#contentList").hide(); // hide the element with ID "otherElement"
  $("#contentAdd").hide();
});

$("#Dialer").click(function() { // when "button_id" is clicked
	$("#contentDialer").show(); // show element
	$("#contentList").hide();	// hide other element
  $("#contentAdd").hide();
});

$("#ContactList").click(function() { // when "button_id" is clicked
	$("#contentList").show(); // show element
	$("#contentDialer").hide();	// hide other element
  $("#contentAdd").hide();
});

$("#ContactAdd").click(function() { // when "button_id" is clicked
	$("#contentAdd").show(); // show element
	$("#contentDialer").hide();	// hide other element
  $("#contentList").hide();
});
