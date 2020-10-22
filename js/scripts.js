function openInfoBlock(input) {
  if (input === "cat") {
    $("#cat-info").show();
  }
  else if (input === "dog") {
    $("#dog-info").show();
  }
  else if (input === "fish") {
    $("#fish-info").show();
  }
  else {
    $("#tortoise-info").show();
  }
}

$(document).ready(function() {
	$("form#animals").submit(function(event) {
    event.preventDefault();
    const input = $("input:radio[name=animal]:checked").val();
    $(".info").hide();

    openInfoBlock(input);
    
  });
});