/////////// write a function to check the time ///////////
//Global variables for checking if bedtime button has been pressed
var bedTime = 0;
var isBedTime = false;
function timeChecker(){
  	var date = new Date();
  	var hours = date.getHours();
  	var minutes = date.getMinutes();
  	var time = hours + ":" + minutes;
    var playing = true;
    var sleepSound = document.getElementById('sleepAudio');

    if (hours >= 18 && !isBedTime){
      $("#playPause").hide();
      $("body").addClass("night").removeClass("day");
      $("#bedTime").show();
      $("#bedTime").mousedown(function(){
        isBedTime = true;
        timeChecker();
        $("#bedTime").hide();
      });
    }
    if(hours >= 18 && isBedTime){
      $("#playPause").show();
      sleepSound.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
      }, false);

      $(".bgColor").css({"background-color": "rgba(209,14,14,0.6)"});

      sleepSound.addEventListener('playing', function(){
        $("#playPause").mousedown(function(){
          sleepSound.pause();
        })
      });
      sleepSound.addEventListener('pause', function(){
        $("#playPause").mousedown(function(){
          sleepSound.play();
        })
      });
      sleepSound.play();
    }

    if(hours <= 4 && !isBedTime){
      $("#playPause").hide();
        $("body").addClass("night").removeClass("day");
      $("#bedTime").show();
      $("#bedTime").mousedown(function(){
        isBedTime = true;
        timeChecker();
        $("#bedTime").hide();
      });
    }

    if(hours <= 4 && isBedTime){
      $("#playPause").show();
        $("body").addClass("night").removeClass("day");
      sleepSound.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
      }, false);

      $(".bgColor").css({"background-color": "rgba(209,14,14,0.6)"});

      sleepSound.addEventListener('playing', function(){
        $("#playPause").mousedown(function(){
          sleepSound.pause();
        })
      });
      sleepSound.addEventListener('pause', function(){
        $("#playPause").mousedown(function(){
          sleepSound.play();
        })
      });
      sleepSound.play();
    }

    if (hours > 4 && hours < 18){
      isBedTime = false;
      $("#bedTime").hide();
      $("#playPause").hide();
      $("body").addClass("day").removeClass("night");
      sleepSound.pause();
      sleepSound.currentTime = 0;
      $(".bgColor").css({"background-color": "rgba(209,14,14,0)"});
    }
}
      ////////// call that function when you click the page ///////

$(document).ready(function(){
  timeChecker();
  //Code used to detect input for text area. Can be implemented in future
  /*$(".numOnly").on("keypress keyup blur",function (event) {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
  });

  $(".numOnly").keypress(function(event){
    if(event.which == 13){
        bedTime = $(".numOnly").val();
        $("#inputText").hide();
        //timeChecker();
    }
  });*/

});
