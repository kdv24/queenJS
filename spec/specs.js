describe('queen', function() {
  it('is false if the coordinates in the begining and end are the same', function() {
    expect(queen(1,2,1,2)).to.equal(false);
  });
  it('is true if the x coordinates in the begining and end are the same, but the y are not', function() {
    expect(queen(1,2,1,3)).to.equal(true);
  });
  it('is true if the y coordinates in the begining and end are the same, but the x are not', function() {
    expect(queen(1,3,2,3)).to.equal(true);
  });
  it('is true if the relationship between the x and y at the start is the same as the x and y at the end', function() {
    expect(queen(1,5,2,6)).to.equal(true);
  });
  it('is true if the start x and y equals the end x and y', function() {
    expect(queen(5,2,1,6)).to.equal(true);
  });
});


$(document).ready(function() {

  $("form#queen").submit(function(event) {
    //$(".not").remove();
    var startX = parseInt($("input#start-x").val());
    var startY = parseInt($("input#start-y").val());

    $(".year").text(year);
    if (!result) {
    $(".not").text("not");
    }
    else{
      $(".not").text("");

    }

    $("#result").show();

    event.preventDefault();
  });
});
