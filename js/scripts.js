var queen = function(startX, startY, endX, endY) {
  if((startX === endX) && (startY === endY )){
    return false;
  }
  else if ((startX === endX) && (startY !== endY)){
    return true;
  }

  else if ((startX !== endX) && (startY === endY)){
    return true;
  }

  else if ((startX - endX) === (startY - endY)){
    return true;
  }

  else if ((startX + startY) === (endX + endY)){
    return true;
  }

  else {
    return false;
  }
};

$(document).ready(function() {

  $("form#queen-attack").submit(function(event) {
    //$(".not").remove();
    var startX = parseInt($("input#start-x").val());
    var startY = parseInt($("input#start-y").val());
    var endX = parseInt($("input#end-x").val());
    var endY = parseInt($("input#end-y").val());

    var result = queen(startX, startY, endX, endY);


    if(!result) {
      $(".not").text("not");
    }
    else {
      $(".not").text("");
    }

    $("#result").show();

    event.preventDefault();
  });
});
