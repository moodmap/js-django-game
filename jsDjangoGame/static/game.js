$(document).ready( function() {

  var start = new Date().getTime();
  var difficulty;
  var speedDict = {"slow":6,"middle": 3,"fast":0.1};
  $( "#easy-btn" ).on( "click", function(){choose("slow");});
  $( "#medium-btn" ).on( "click", function(){choose("middle");});
  $( "#hard-btn" ).on( "click", function(){choose("fast");});

  function choose(speed) {
      difficulty=speed;
      alert("Difficulty is: "+difficulty);
  };

  $( ".clickIt" ).on( "click", function() {
      divClicked();
  });

  function moveShape() {
    var leftPosition2 = Math.random()*400;
    var topPosition2 = Math.random()*400;
    var speed = Math.random
    $(".clickIt").animate({left:leftPosition2+"px",top:topPosition2+"px"},speedDict[difficulty]*1000);
    moveShape();

  };

  function shapeAppear() {
    var leftPosition = Math.random()*400;
    var topPosition = Math.random()*400;

    $(".clickIt").css("display","block");
    $(".clickIt").css("background-color",getRandomColor());
    $(".clickIt").css("top",topPosition+"px");
    $(".clickIt").css("left",leftPosition+"px");
    $(".clickIt").css("height",((Math.random()*40)+50)+"px");
    $(".clickIt").css("width",((Math.random()*40)+50)+"px");
    $(".clickIt").css("border-radius",Math.random()*100+"%");
    start = new Date().getTime();
    moveShape()
    };

  function shapeDelay() {
    setTimeout(shapeAppear,Math.random()*2000);
    };

  function divClicked () {
    $(".clickIt").css("display","none");
    var end = new Date().getTime();
    var duration = (end - start)/1000;
    $(".timeTaken").html(duration+" seconds");
    shapeDelay();
    };

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

});
