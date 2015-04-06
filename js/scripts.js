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
