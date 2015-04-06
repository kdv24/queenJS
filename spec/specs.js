describe('queen', function() {
  it('is false if the coordinates in the begining and end are the same', function() {
    expect(queen(1,2,1,2)).to.equal(false);
  });
  it('is true if the x coordinates in the begining and end are the same, but the y are not', function() {
    expect(queen(1,2,1,3)).to.equal(true);
  });

});
