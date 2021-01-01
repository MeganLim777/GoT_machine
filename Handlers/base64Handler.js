$(document).ready(function() {
  $("#sendBase64Btn").click(function(e) {
    e.preventDefault();

    var base64Text = $("#outputbase64").attr("base64ToSend");
    console.log(base64Text);

    // // the jQuery stuff that we want to do
    // $.ajax(
    // {
    //   data: { base64Text : base64Text },
    //   type: 'POST',
    //   url: 'http://localhost/GoT_machine/index.php',
    //   cache: false,
    //   success: function(data) {
    //     console.log("Something is suppose to happen here");
    //     console.log("Success");
    //     alert(data);
    //   },
    //   error: function(xhr, status, error) {
    //     console.error(xhr);
    //   }
    // }
    // )
    // .done(function(data) {
    //   if (data.error) {
    //     console.log("Got error: ", text(data.error));
    //   } else {
    //     console.log("Success");
    //   }
    // })

    // the jQuery stuff that we want to do
    //data: { base64Text: base64Text },
    //data: JSON.stringify({ base64Text: "hi there from ajax" }),
    $.ajax(
    {
      url: 'http://localhost/GoT_machine/Handlers/base64Handler.php',
      type: 'POST',
      data: {"base64Text": "hi there from ajax"},
      cache: false,
      success: function(data) {
        console.log(data);
        alert(data);
        console.log("It can come here");
        console.log(typeof data);
      },
      error: function(xhr, status, error) {
        console.error(xhr);
      }
    }
  );

  })

});
