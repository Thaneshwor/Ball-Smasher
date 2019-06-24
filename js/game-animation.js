function BoxAnimation(boxes, container) {
  
  var that = this;
  this.intervalId;
  this.boxes = boxes;
  this.container = container;

 this.animate = function (){
    this.intervalId = setInterval (function(){
      that.boxes.forEach(function (box, index){
        that.move(box, index);
        // that.checkBoxCollision();
        for(var i=0;i<that.boxes.length;i++){
           for(var j=0;j<i;j++){
            that.checkBallCollision(that.boxes[j], that.boxes[i]);
          }
        }
        
        that.checkWallCollision(box);
      });
    }, 1000/60);

  };


  this.move = function(box, index){
    if(index%2 ===0){
      box.moveHorizontally();
    }else{
      box.moveVertically();
    }

  };

  this.checkWallCollision = function(box){
    // horizontal collision
    if(box.x + box.width >= this.container.width || box.x <0){
      box.direction = box.direction * -1;
    }
    // vertically collision 
    if(box.y + box.height >= this.container.height || box.y < 0){
      box.direction = box.direction * -1;
    }
 
  };
 // AABB Collision detection 
  this.checkBallCollision = function(firstBox, secondBox){

    if (firstBox.x <= secondBox.x + secondBox.width &&
      firstBox.x + firstBox.width > secondBox.x &&
      firstBox.y < secondBox.y + secondBox.height &&
      firstBox.height + firstBox.y >secondBox.y) {
    
      firstBox.direction *= -1;
      secondBox.direction *= -1;

      console.log("collide --------------------");
    }
  }
}
