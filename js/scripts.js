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

  $("form#queen").submit(function(event) {
    //$(".not").remove();
    var startX = parseInt($("input#start-x").val());
    var startY = parseInt($("input#start-y").val());

    $(".attack-x").text(startX);
    // if (!result) {
    // $(".not").text("not");
    // }
    // else{
    //   $(".not").text("");
    // 
    // }

    $("#result").show();

    event.preventDefault();
  });
});
