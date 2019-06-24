 function BoxCollision(elementId){
 	this.TOTAL_BOX = 50;
 	this.holdUniqueBox =[]; 
 	this.isUnique = true;

 	that = this;

 	var boxes = [];
 	var element = document.getElementById(elementId);
 	console.log(element);

 	this.init = function(){
 		var container = new Container();
 		container.create();
 		
 	

 		for(var i = 1; i <= this.TOTAL_BOX; i++){
 			var randColor = randomColor();
 			var xPosition = getRandom(10, 1250);
 			var yPosition = getRandom(10, 550);

 			 this.isUnique = true;// isUniqueBox(xPosition, yPosition); to be continue
 			if(this.isUnique){
 				var box = new Box(xPosition, yPosition, randColor);
 				boxes.push(box);
 				box.create();
 				container.append(box.element);
 				this.holdUniqueBox.push(
 					{
 						x:xPosition,
 						y:yPosition,
 					}
 				);

 			}
 			else{
 				i--;
 				console.log('duplicate-----------');
 			}
 			
 		}
 		element.appendChild(container.element);

 		var animation = new BoxAnimation(boxes, container);
		animation.animate();	

 	}

 	// function isUniqueBox(xPosition, yPosition){
 	// 	if(that.holdUniqueBox.length === 0){
 	// 		return true;
 	// 	}

 	// 	for (var i = this.holdUniqueBox.length - 1; i >= 0; i--) {
 			
 	// 		if((this.holdUniqueBox[i].x <= xPosition) && (this.holdUniqueBox[i].y <= yPosition)){
 	// 			if(((this.holdUniqueBox[i].x + 10) > xPosition)&&((this.holdUniqueBox[i].y +10 ) > yPosition)){
 	// 				continue;
 	// 			}
 	// 			else{
 	// 				return false;
 	// 			}
 	// 		}
 			
 	// 	}
 	// 	return true;
 	// }

 	function randomColor(){
		var redColor = getRandom(0,255);
		var greenColor = getRandom(0,255);
		var blueColor = getRandom(0,255);
		return 'rgb('+redColor + ',' + greenColor +',' + blueColor+')';
	}
	function getRandom(min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
	}




 }

 var boxCollision = new BoxCollision('ball-collision');
 boxCollision.init();