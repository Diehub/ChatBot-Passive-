var username = "";

function askUsername() {
  send_message("Halo, Siapa namamu?");
}

function send_message(message) {
  var prevMessage = $("#container").html();
  if(prevMessage!=0)
  prevMessage = prevMessage+"<br>";

  $("#container").html(prevMessage+ " Chatbot: " + message);
  $(".current_message").hide();
  $(".current_message").delay(400).fadeIn();
  $(".current_message").removeClass("current_message");

}

function ai(message) {
  if (username.length <3) {
    username = message;
    send_message("Hai " + message+ ", Kamu nugas apa?");
  }

  if(message.indexOf("nanya mulu")>=0|| message.indexOf("and you")>=0)
  {
    send_message( "Tapi kan aku... :(");
  }

  if(message.indexOf("time")>=0|| message.indexOf("can you tell me time")>=0)
  {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    send_message("Current Time is :  "+ h+":"+m );
  }

}

$(function() {

  askUsername();

  $("#textbox").keypress(function(event) {
    if (event.which == 13) {
      if ($("#enter").prop("checked")) {
        event.preventDefault();
        $("#send").click();
      }
    }
  });

  $("#send").click(function() {
    var username = "You : "
    var message = $("#textbox").val();
    $("#textbox").val("");

    var prevMessage = $("#container").html();

    // console.log(prevMessage.length);
    if (prevMessage.length != 0 || prevMessage != "")
      prevMessage = prevMessage + "<br>";

    $("#container").html(prevMessage + username + message+"");

    $("#container").scrollTop($("#container").prop("scrollHeight"));

    ai(message);

  });


});
