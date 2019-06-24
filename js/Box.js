function Box(x, y, color) {
	var that = this;
	var score = 0;
	var url = 'img/ant-gif.gif'
	this.x = x || 0;
	this.y = y || 0;
	this.width = 35;
	this.height = 35;
	this.velocity = 1;
	this.direction = 1;
	this.bgColor = color || 'red';
	this.position = 'absolute';

	this.element;

	this.create = function(){
		this.element = document.createElement('div');
		this.setPosition(this.x, this.y);
		this.element.style.width = this.width+'px';
		this.element.style.height = this.height+'px';
		this.element.style.position = this.position;
		// this.element.style.background = this.bgColor;
		this.element.addEventListener('click',this.disappear, true);
		this.element.style.backgroundImage = 'url(' + url + ')';
		this.element.style.backgroundSize = '100% 100%';

	}


	this.setPosition = function(x, y){
		this.x = x;
		this.y = y;

		this.element.style.top = this.y+'px';
		this.element.style.left = this.x+'px';
	};

	this.moveHorizontally = function (){

		this.x += this.direction * this.velocity;

		this.element.style.left = this.x+'px';
	
	}

	this.moveVertically = function (){
		this.y += this.direction * this.velocity;

		this.element.style.top = this.y+'px';
	};

	this.disappear = function() {
		that.element.style.background = this.bgColor;
		that.score++;
		that.element.style.display = 'none';
		that.printScore(score);
	}

	this.printScore = function(){
		
		console.log(score);
	}
}