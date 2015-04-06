var queen = function(startX, startY, endX, endY) {
  if((startX === endX) && (startY === endY )){
    return false;
  }
  else if ((startX === endX) && (startY !== endY))|| ((startY === endY) && (startX !== endX)){
    return true;
  }
};
