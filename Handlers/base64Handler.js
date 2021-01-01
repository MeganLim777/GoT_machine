$(document).ready(function() {
  $("#sendBase64Btn").click(function(e) {
    e.preventDefault();

    var base64Text = $("#outputbase64").attr("base64ToSend");
    console.log(base64Text);

    // the jQuery stuff that we want to do
    $.ajax(
    {
      data: { base64Text : base64Text },
      type: 'POST',
      url: 'http://localhost/GoT_machine/index.php'
    }
    )
    .done(function(data) {
      if (data.error) {
        console.log("Got error: ", text(data.error));
      } else {
        console.log("Success");
      }
    })

  })

});
