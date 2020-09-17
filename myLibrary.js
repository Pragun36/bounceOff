function bounceOff(rect3,rect4){

    if (rect3.x - rect4.x < rect4.width/2 + rect3.width/2
      && rect4.x - rect3.x < rect4.width/2 + rect3.width/2) {
        rect3.velocityX = rect3.velocityX * (-1);
        rect4.velocityX = rect4.velocityX * (-1);}
  
    if (rect3.y - rect4.y < rect4.height/2 + rect3.height/2
    && rect4.y - rect3.y < rect4.height/2 + rect3.height/2){
      rect3.velocityY = rect3.velocityY * (-1);
      rect4.velocityY = rect4.velocityY * (-1);}
  }

  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }